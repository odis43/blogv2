const withMDX = require("@next/mdx")();
/** @type {import('next').NextConfig} */

const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
};

module.exports = withMDX(nextConfig);
