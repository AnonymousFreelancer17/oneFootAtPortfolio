import { PrismaClient as AuthClient } from '../generated/auth';

const globalForAuth = global as unknown as { authDb: AuthClient };

export const authDb =
  globalForAuth.authDb ??
  new AuthClient({
    datasourceUrl: process.env.AUTH_DATABASE_URL,
  });

if (process.env.NODE_ENV !== 'production') globalForAuth.authDb = authDb;
