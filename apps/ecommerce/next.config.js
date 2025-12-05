// @ts-check

const path = require("path");
const { composePlugins, withNx } = require("@nx/next");

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Required to allow Next.js to transpile shared libraries inside /libs
    svgr: false,
  },

  // Allow importing TS/JS from outside the Next.js app
  experimental: {
    externalDir: true,
  },

  webpack: (config) => {
    // Add alias for UI shared library
    config.resolve.alias["@ui"] = path.resolve(
      __dirname,
      "../../libs/ui/src"
    );

    // Add alias for other shared libs easily later
    config.resolve.alias["@database"] = path.resolve(
      __dirname,
      "../../libs/database/src"
    );

    return config;
  },
};

const plugins = [withNx];

module.exports = composePlugins(...plugins)(nextConfig);
