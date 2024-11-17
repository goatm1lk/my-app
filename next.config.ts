import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/PokeAPI/sprites/**", // Wildcard to match any image under this path
      },
      
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
        pathname: "/system/resources/**", // Wildcard to match any image under this path
      },
    ],
  },
};

export default nextConfig;
