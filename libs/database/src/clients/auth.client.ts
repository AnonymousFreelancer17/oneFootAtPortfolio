import { PrismaClient } from "../generated/auth";

let prisma: PrismaClient;

declare const global: any;

if (!global.__auth_prisma__) {
  global.__auth_prisma__ = new PrismaClient();
}

prisma = global.__auth_prisma__;

export const authDb = prisma;
