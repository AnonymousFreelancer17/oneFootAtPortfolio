import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import { ValidationError } from '../../../../libs/error_handler/src/index';
import { redis } from '../../../../libs/database/src/index';
import { sendEmail } from '../utils/sendMail';


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateRegistrationData = (
  data: any,
  userType: 'user' | 'seller'
) => {
  const { name, email, password, phone_number, gstin, country } = data;

  if (
    !name ||
    !email ||
    !password ||
    !phone_number ||
    !country ||
    (userType === 'seller' && (!gstin))
  ) {
    throw new ValidationError(`Missing required fields!`);
  }

  if (!emailRegex.test(email)) {
    throw new ValidationError(`Invalid email format!`);
  }
};

export const checkOtpRestrictions = async (email: string) => {
  if (await redis.get(`otp_lock:${email}`)) {
    throw new ValidationError(`Account locked! Try again after 30 mins.`);
  }

  if (await redis.get(`otp_spam_lock:${email}`)) {
    throw new ValidationError(`Too many OTP requests! Wait 1 hour.`);
  }

  if (await redis.get(`otp_cooldown:${email}`)) {
    throw new ValidationError(`Please wait 1 min before requesting a new OTP!`);
  }
};

export const trackOtpRequests = async (email: string) => {
  const otpRequestKey = `otp_request_count:${email}`;
  let otpRequests = parseInt((await redis.get(otpRequestKey)) || '0');

  if (otpRequests >= 2) {
    await redis.set(`otp_spam_lock:${email}`, 'locked', 'EX', 3600);
    throw new ValidationError(
      'Too many OTP requests! Please wait an hour before requesting again!'
    );
  }

  await redis.set(otpRequestKey, otpRequests + 1, 'EX', 3600);
};

export const sendOtp = async (
  name: string,
  email: string,
  template: string
) => {
  const otp = crypto.randomInt(1000, 9999).toString();

  // Hash OTP before saving
  const hashedOtp = await bcrypt.hash(otp, 10);
  await redis.set(`otp:${email}`, hashedOtp, 'EX', 300); // 5 min expiry
  await redis.set(`otp_cooldown:${email}`, 'true', 'EX', 60); // 1 min cooldown

  // Send email
  await sendEmail(email, 'Verify your Email', template, { name, otp });

  return { otpExpiresIn: 300 }; // Optional: return for UI timer
};

// Verify OTP



export const verifyOtp = async (email: string, inputOtp: string) => {
  const lockKey = `otp_lock:${email}`;
  const attemptsKey = `otp_attempts:${email}`;
  const storedOtp = await redis.get(`otp:${email}`);

  // Check if account is locked
  const isLocked = await redis.get(lockKey);
  if (isLocked) {
    throw new ValidationError('Account is temporarily locked. Try again later.');
  }

  if (!storedOtp) {
    throw new ValidationError('OTP expired or invalid!');
  }

  const isMatch = await bcrypt.compare(inputOtp, storedOtp);

  if (!isMatch) {
    // Increment attempts count
    const attempts = parseInt((await redis.get(attemptsKey)) || '0');

    if (attempts >= 4) {
      await redis.set(lockKey, 'locked', 'EX', 1800); // lock for 30 mins
      throw new ValidationError('Too many failed attempts. Account locked for 30 minutes!');
    }

    await redis.set(attemptsKey, attempts + 1, 'EX', 1800); // reset TTL on each fail
    throw new ValidationError('Invalid OTP!');
  }

  // OTP is valid → clean up
  await Promise.all([
    redis.del(`otp:${email}`),
    redis.del(attemptsKey),
    redis.del(lockKey),
  ]);

  return true;
};



