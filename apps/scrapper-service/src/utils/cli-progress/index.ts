import cliProgress from "cli-progress";

// ✅ Create MultiBar instance properly
export const multiBar = new cliProgress.MultiBar(
  {
    clearOnComplete: false,
    hideCursor: true,
    format:
      "{category} | {bar} | {percentage}% | {value}/{total}",
  },
  cliProgress.Presets.shades_classic
);