import fs from "fs";

export type Status = "pending" | "running" | "completed" | "failed";

export interface ScraperTree {
  roots: Record<string, any>;
}

const TREE_PATH = "../../../tmp_cache/myntra/categories.json";

export function loadTree(): ScraperTree | null {
  if (!fs.existsSync(TREE_PATH)) return null;
  return JSON.parse(fs.readFileSync(TREE_PATH, "utf-8"));
}

export function saveTree(tree: ScraperTree) {
  fs.writeFileSync(TREE_PATH, JSON.stringify(tree, null, 2));
}