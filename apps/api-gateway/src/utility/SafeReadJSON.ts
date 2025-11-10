import fs from "fs/promises";

export default async function safeReadJSON<T = any>(filePath: string): Promise<T | null> {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (err: any) {
    console.error(`❌ Failed to read JSON at ${filePath}:`, err.message);
    return null;
  }
}