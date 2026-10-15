import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // @titakin/ui ships TypeScript source; Next compiles it as part of the app.
  transpilePackages: ["@titakin/ui"],
  // Linting runs as its own Turborepo task (`pnpm lint`).
  eslint: { ignoreDuringBuilds: true },
};

export default withNextIntl(nextConfig);
