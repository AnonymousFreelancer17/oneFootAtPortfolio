// test-db.ts
import { authDb as prisma } from "../../../../libs/database/src";

export async function testDB() {
  try {
    console.log("🔄 Connecting to MongoDB...");
    await prisma.$connect();
    console.log("✅ MongoDB connected");

    // const usersCount = await prisma.users.count();
    // console.log("👤 Users count:", usersCount);
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
  } finally {
    await prisma.$disconnect();
  }
}
