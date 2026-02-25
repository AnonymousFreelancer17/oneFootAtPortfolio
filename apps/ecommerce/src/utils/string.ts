export function toCamelCase(input: string): string {
  if (!input) return "";

  return input
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s_-]/g, " ") // remove special chars
    .split(/[\s_-]+/) // split by space, dash, underscore
    .map((word, index) =>
      index === 0
        ? word
        : word.charAt(0).toUpperCase() + word.slice(1),
    )
    .join("");
}

// src/utils/string.ts

export function safeCapitalize(value?: string | null): string {
  if (!value) return "";

  return value.charAt(0).toUpperCase() + value.slice(1);
}


export function replaceHyphens(value: string): string {
  if (!value) return "";

  return value.replace(/--/g, " ").replace(/-/g, " ");
}