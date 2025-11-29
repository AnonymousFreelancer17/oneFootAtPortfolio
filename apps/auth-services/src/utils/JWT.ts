import bcrypt from 'bcryptjs';

const SALT_ROUNDS = 10;

/**
 * Hashes the password using bcrypt
 * @param password - Plain text password
 * @returns Hashed password
 */
export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  return bcrypt.hash(password, salt);
};

/**
 * Compares the provided password with the hashed password
 * @param password - Plain text password
 * @param hashedPassword - Hashed password stored in DB
 * @returns True if match, false otherwise
 */
export const verifyPassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return bcrypt.compare(password, hashedPassword);
};
