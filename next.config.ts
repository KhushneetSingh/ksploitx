import type { NextConfig } from "next";

const isStaticExport = process.env.NEXT_EXPORT === "true";

const nextConfig: NextConfig = {
  ...(isStaticExport && {
    output: "export",
    trailingSlash: true,
    images: { unoptimized: true },
  }),
};

export default nextConfig;
