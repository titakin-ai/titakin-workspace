import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // @titakin/ui ships TypeScript source; Next compiles it as part of the app.
  transpilePackages: ["@titakin/ui"],
  // Linting runs as its own Turborepo task (`pnpm lint`).
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
