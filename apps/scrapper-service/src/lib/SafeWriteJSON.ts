import fs from "fs";
import path from "path";

export default async function SafeWriteJSON(filePath: string, data: any) {
  try {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    const tmpPath = `${filePath}.tmp`;
    fs.writeFileSync(tmpPath, JSON.stringify(data, null, 2), "utf8");
    fs.renameSync(tmpPath, filePath);
  } catch (err) {
    console.error("❌ Failed to write JSON cache:", err);
  }
}
