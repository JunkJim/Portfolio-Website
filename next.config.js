/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,

  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/i,
      type: "asset/source",
    });

    return config;
  },

  env: {
    BASE_URL: process.env.BASE_URL,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.shields.io",
      },
      {
        protocol: "https",
        hostname: "pohwp.dev",
      },
      {
        protocol: "https",
        hostname: "www.pohwp.dev",
      },
    ],
  },
};
