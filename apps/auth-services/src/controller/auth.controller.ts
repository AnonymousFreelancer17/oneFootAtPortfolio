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

// importing from error-handler library
import { ValidationError } from "../../../../libs/error_handler/src/index";

// import { OAuth2Client } from "google-auth-library";
// import jwt from "jsonwebtoken";

import { hashPassword } from "../utils/JWT";

// const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// export const userRegistration = async (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {
//   try {
//     const { name, email, service } = req.body;

//     validateRegistrationData({ name, email, service }, "user");

//     console.log("➡️ Registration request:", { name, email, service });

//     if (!name || !email || !service) {
//       throw new ValidationError("Name, email, phone number are required");
//     }

//     const existingUser = await prisma.users.findFirst({
//       where: { email, service },
//     });

//     if (existingUser) {
//       throw new ValidationError("User already exists");
//     }

//     await checkOtpRestrictions(email);
//     console.log("✅ OTP restriction check passed");

//     await trackOtpRequests(email);
//     console.log("✅ OTP request tracked");

//     await sendOtp(name, email, "user-activation-mail");
//     console.log("📧 sendOtp called successfully");

//     return res.status(200).json({
//       message: "OTP sent to your email",
//     });
//   } catch (error) {
//     return next(error);
//   }
// };

export const userRegistration = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log("🚀 Route hit: userRegistration");

  try {
    const { name, email, service } = req.body;
    console.log("📥 Body received:", req.body);

    console.log("1️⃣ Running validation...");
    validateRegistrationData({ name, email, service }, "user");
    console.log("✅ Validation passed");

    if (!name || !email || !service) {
      throw new ValidationError("Name, email, phone number are required");
    }

    console.log("2️⃣ Checking existing user...");
    const existingUser = await prisma.users.findFirst({
      where: { email, service },
    });
    console.log("✅ DB query finished");

    if (existingUser) {
      throw new ValidationError("User already exists");
    }

    console.log("3️⃣ Checking OTP restriction...");
    await checkOtpRestrictions(email);
    console.log("✅ OTP restriction check passed");

    console.log("4️⃣ Tracking OTP request...");
    await trackOtpRequests(email);
    console.log("✅ OTP request tracked");

    console.log("5️⃣ Sending OTP...");
    await sendOtp(name, email, "user-activation-mail");
    console.log("📧 OTP sent");

    console.log("6️⃣ Sending response...");
    return res.status(200).json({
      message: "OTP sent to your email",
    });
  } catch (error) {
    console.error("❌ Error in registration:", error);
    return next(error);
  }
};

export const vendorRegistration = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { name, email, phoneNumber, service } = req.body;

    validateRegistrationData({ name, email, phoneNumber, service }, "vendor");

    console.log("➡️ Registration request:", {
      name,
      email,
      service,
      phoneNumber,
    });

    if (!name || !email || !service || !phoneNumber) {
      throw new ValidationError("Name, email, phone number are required");
    }

    const existingUser = await prisma.users.findFirst({
      where: { email, phoneNumber, service },
    });

    if (existingUser) {
      throw new ValidationError("User already exists");
    }

    await checkOtpRestrictions(email);
    console.log("✅ OTP restriction check passed");

    await trackOtpRequests(email);
    console.log("✅ OTP request tracked");

    await sendOtp(name, email, "user-activation-mail");
    console.log("📧 sendOtp called successfully");

    return res.status(200).json({
      message: "OTP sent to your email",
    });
  } catch (error) {
    return next(error);
  }
};

/**
 * ✅ Verify Registration OTP
 * - Validates OTP
 * - Creates user after successful verification
 */
export const verifyUserRegistrationOtp = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email, otp, name, password, service } = req.body;

    if (!email || !otp || !service) {
      throw new ValidationError("Missing required fields");
    }

    const existingUser = await prisma.users.findFirst({
      where: { email, service },
    });

    if (existingUser) {
      throw new ValidationError("User already verified");
    }

    const isValidOtp = await verifyOtpHelper(email, otp);
    if (!isValidOtp) throw new ValidationError("Invalid OTP");

    const hashedPassword = password ? await hashPassword(password) : null;

    const user = await prisma.users.create({
      data: {
        email,
        name,
        service,
        password: hashedPassword,
        isEmailVerified: true,
      },
    });

    await redis.del(`otp:${email}`);

    return res.status(201).json({
      message: "Account verified successfully",
      user,
    });
  } catch (error) {
    return next(error);
  }
};

// resend OTP
export const resendOtp = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email, name } = req.body;

    await checkOtpRestrictions(email);
    await trackOtpRequests(email);
    await sendOtp(name, email, "user-activation-mail");

    res.json({ message: "OTP resent successfully" });
  } catch (e) {
    next(e);
  }
};

/**
 * ✅ User Login Controller
 * - Sends OTP for existing user
 */
// export const userLogin = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const { email, password, service } = req.body;
//     if (!email || !password || !service)
//       throw new ValidationError("Email is required");

//     const user = await prisma.users.findUnique({ where: { email, service } });
//     if (!user)
//       throw new ValidationError("User not found. Please register first.");
//     if (!user?.isVerified)
//       throw new ValidationError(
//         "User not verified. Complete registration first."
//       );

//     if (!user.password) throw new ValidationError("Invalid password or email");

//     const isPasswordValid = verifyPassword(password, user.password);
//     if (!isPasswordValid)
//       throw new ValidationError("Invalid password or email");

//     await checkOtpRestrictions(email, next);
//     await trackOtpRequests(email, next);
//     await sendOtp(user.name || "User", email, "login-otp-mail");

//     return res.status(200).json({ message: "Login OTP sent to your email." });
//   } catch (error) {
//     console.error("[Login Error]:", error);
//     return next(error);
//   } finally {
//     await prisma.$disconnect();
//   }
// };

/**
 * ✅ Google OAuth Login
 * - Verifies Google token and logs in user
 */
// export const googleOAuth = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const { tokenId } = req.body;
//     if (!tokenId) throw new ValidationError("Token ID is required");

//     // ✅ Verify Google Token
//     const ticket = await googleClient.verifyIdToken({
//       idToken: tokenId,
//       audience: process.env.GOOGLE_CLIENT_ID,
//     });

//     const payload = ticket.getPayload();
//     if (!payload) throw new ValidationError("Invalid Google token");

//     const { email, name, sub } = payload; // `sub` is Google's user ID
//     if (!email || !sub)
//       throw new ValidationError("Invalid Google account data");

//     // ✅ Check if user exists
//     let user = await prisma.users.findUnique({ where: { email } });

//     if (!user) {
//       // ✅ Create user with Google auth details
//       user = await prisma.users.create({
//         data: {
//           email,
//           name: name || "Google User",
//           isVerified: true,
//           authProvider: "google",
//           providerId: sub, // Google unique user ID
//         },
//       });
//     }

//     // ✅ Generate JWT Token
//     const jwtToken = jwt.sign(
//       { id: user.id, email: user.email },
//       process.env.JWT_SECRET || "supersecret",
//       { expiresIn: "7d" }
//     );

//     return res.status(200).json({
//       message: "Google OAuth successful",
//       token: jwtToken,
//       user,
//     });
//   } catch (error) {
//     console.error("[Google OAuth Error]:", error);
//     return next(error);
//   } finally {
//     await prisma.$disconnect();
//   }
// };

// export const updatePassword = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {};
