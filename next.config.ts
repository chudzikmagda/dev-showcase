import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  allowedDevOrigins: ["192.168.0.164"],
  reactCompiler: true,
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
