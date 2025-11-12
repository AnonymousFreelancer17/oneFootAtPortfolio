 import UserAgent from "user-agents";

export function getRandomUserAgent() {
  const ua = new UserAgent({
    deviceCategory: "desktop",
  });
  return ua.toString();
}
