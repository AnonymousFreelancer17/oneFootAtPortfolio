import { Request, Response, NextFunction } from "express";
import {
  checkOtpRestrictions,
  sendOtp,
  trackOtpRequests,
  validateRegistrationData,
  verifyOtp as verifyOtpHelper,
} from "../utils/auth.helper";
import { authDb as prisma } from "../../../../libs/database/src/index";
import { redis } from "../../../../libs/database/src/index";
import { ValidationError } from "../../../../libs/error_handler";
import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import { hashPassword, verifyPassword } from "../utils/JWT";

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const userRegistration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    validateRegistrationData(req.body, "user");
    const { name, email } = req.body;

    if (!email || !name)
      throw new ValidationError("Name and email are required");

    console.log(`[User Registration] Email: ${email}, Name: ${name}`);

    const existingUser = await prisma.users.findUnique({ where: { email } });
    if (existingUser)
      throw new ValidationError("User already exists with this email");

    await checkOtpRestrictions(email, next);
    await trackOtpRequests(email, next);
    await sendOtp(name, email, "user-activation-mail");

    return res
      .status(200)
      .json({ message: "OTP sent to your email. Please verify your account." });
  } catch (error) {
    console.error("[Registration Error]:", error);
    return next(error);
  } finally {
    await prisma.$disconnect();
  }
};

/**
 * ✅ Verify Registration OTP
 * - Validates OTP
 * - Creates user after successful verification
 */
export const verifyRegistrationOtp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, otp, name, password, service } = req.body;

    console.log({ email, otp, name, password, service });

    if (!email || !otp || !service)
      throw new ValidationError("Email ,OTP and Service are required");

    const isValid = await verifyOtpHelper(email, otp);
    if (!isValid) throw new ValidationError("Invalid OTP");

    const securedPassword = password ? await hashPassword(password) : null;

    const user = await prisma.users.create({
      data: {
        email,
        name,
        password: securedPassword,
        isVerified: true,
      },
    });

    await redis.del(`otp:${email}`);

    return res
      .status(201)
      .json({ message: "Account verified successfully", user });
  } catch (error) {
    console.error("[OTP Verification Error]:", error);
    return next(error);
  } finally {
    await prisma.$disconnect();
  }
};

/**
 * ✅ User Login Controller
 * - Sends OTP for existing user
 */
export const userLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password, service } = req.body;
    if (!email || !password || !service)
      throw new ValidationError("Email is required");

    const user = await prisma.users.findUnique({ where: { email, service } });
    if (!user)
      throw new ValidationError("User not found. Please register first.");
    if (!user.isVerified)
      throw new ValidationError(
        "User not verified. Complete registration first."
      );

    if (!user.password) throw new ValidationError("Invalid password or email");

    const isPasswordValid = verifyPassword(password, user.password);
    if (!isPasswordValid)
      throw new ValidationError("Invalid password or email");

    await checkOtpRestrictions(email, next);
    await trackOtpRequests(email, next);
    await sendOtp(user.name || "User", email, "login-otp-mail");

    return res.status(200).json({ message: "Login OTP sent to your email." });
  } catch (error) {
    console.error("[Login Error]:", error);
    return next(error);
  } finally {
    await prisma.$disconnect();
  }
};

/**
 * ✅ Verify Login OTP
 * - Validates OTP and generates JWT
 */
export const verifyLoginOtp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, otp, service } = req.body;
    if (!email || !otp) throw new ValidationError("Email and OTP are required");

    const isValid = await verifyOtpHelper(email, otp);
    if (!isValid) throw new ValidationError("Invalid OTP");

    const user = await prisma.users.findUnique({ where: { email, service } });
    if (!user) throw new ValidationError("User not found");

    await redis.del(`otp:${email}`);

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET || "supersecret",
      {
        expiresIn: "7d",
      }
    );

    return res.status(200).json({ message: "Login successful", token, user });
  } catch (error) {
    console.error("[Verify Login OTP Error]:", error);
    return next(error);
  } finally {
    await prisma.$disconnect();
  }
};

/**
 * ✅ Google OAuth Login
 * - Verifies Google token and logs in user
 */
export const googleOAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { tokenId } = req.body;
    if (!tokenId) throw new ValidationError("Token ID is required");

    // ✅ Verify Google Token
    const ticket = await googleClient.verifyIdToken({
      idToken: tokenId,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    if (!payload) throw new ValidationError("Invalid Google token");

    const { email, name, sub } = payload; // `sub` is Google's user ID
    if (!email || !sub)
      throw new ValidationError("Invalid Google account data");

    // ✅ Check if user exists
    let user = await prisma.users.findUnique({ where: { email } });

    if (!user) {
      // ✅ Create user with Google auth details
      user = await prisma.users.create({
        data: {
          email,
          name: name || "Google User",
          isVerified: true,
          authProvider: "google",
          providerId: sub, // Google unique user ID
        },
      });
    }

    // ✅ Generate JWT Token
    const jwtToken = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET || "supersecret",
      { expiresIn: "7d" }
    );

    return res.status(200).json({
      message: "Google OAuth successful",
      token: jwtToken,
      user,
    });
  } catch (error) {
    console.error("[Google OAuth Error]:", error);
    return next(error);
  } finally {
    await prisma.$disconnect();
  }
};

export const updatePassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
