import { join } from "path";


export function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
