import { PrismaClient } from "../generated/scrapper";

let prisma: PrismaClient;

declare const global: any;

if (!global.__scrapper_prisma__) {
  global.__scrapper_prisma__ = new PrismaClient();
}

prisma = global.__scrapper_prisma__;

export const scrapperDb = prisma;
