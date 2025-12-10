import { join } from "path";
// const uiPreset = require("../../libs/ui/tailwind.preset");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // presets:[uiPreset],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../libs/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
