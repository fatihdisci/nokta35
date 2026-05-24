/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kultursanat.izmir.bel.tr",
      },
    ],
  },
}

module.exports = nextConfig
