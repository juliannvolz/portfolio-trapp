import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  images: { unoptimized: true },
  experimental: { optimizePackageImports: ['gsap', 'motion'] },
  turbopack: false,
};

export default nextConfig;