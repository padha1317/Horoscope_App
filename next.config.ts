// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   i18n: {
//     locales: ['en', 'de'],
//     defaultLocale: 'en',
//   },
// };

// export default nextConfig;


import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.cache = false; // Disable Webpack persistent caching
    return config;
  },
};

export default nextConfig;
