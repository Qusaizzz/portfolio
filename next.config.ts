import type { NextConfig } from 'next';
const config: NextConfig = {
  devIndicators: false,
  outputFileTracingRoot: process.cwd(),
  turbopack: { root: process.cwd() },
  redirects() {
    return [
      { source: '/work/grohe', destination: '/work/my-journey', permanent: true },
      { source: '/work/project-3', destination: '/work/seaside-house', permanent: true },
      { source: '/work/xr', destination: '/work/inner-nature', permanent: true },
      { source: '/work/project-4', destination: '/work/palmyra', permanent: true },
    ];
  },
};
export default config;
