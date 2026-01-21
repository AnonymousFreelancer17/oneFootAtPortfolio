//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const path = require('path');


/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {},
  webpack: (config) => {
      // Add alias for UI shared library
      config.resolve.alias["ui"] = path.resolve(
        __dirname,
        "../../libs/ui/src"
      );
  
      // Add alias for other shared libs easily later
      config.resolve.alias["database"] = path.resolve(
        __dirname,
        "../../libs/database/src"
      );
  
      return config;
    },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);

