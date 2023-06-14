// @ts-nocheck
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
 	// images: {
 	// 	domains: ['xsgames.co', 'unsplash.com'],
 	// },

  // i18n: {
  //    locales: ["en"],
  //    defaultLocale: "en",
  //  },
};


const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  register: true,
  skipWaiting: true,
  //runtimeCaching,
  // disable: process.env.NODE_ENV === 'development',
});


 
module.exports = withPWA(nextConfig);




// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

// module.exports = withBundleAnalyzer(nextConfig)
