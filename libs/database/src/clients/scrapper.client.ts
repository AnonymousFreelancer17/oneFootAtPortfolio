import { PrismaClient as ScrapperClient } from '../generated/scrapper';

const globalForScrapper = global as unknown as { scrapperDb: ScrapperClient };

export const scrapperDb =
  globalForScrapper.scrapperDb ??
  new ScrapperClient({
    datasourceUrl: process.env.SCRAPPER_DATABASE_URL,
  });

if (process.env.NODE_ENV !== 'production') globalForScrapper.scrapperDb = scrapperDb;
