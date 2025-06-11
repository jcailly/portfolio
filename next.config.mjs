// /** @type {import('next').NextConfig} */
// export default {
//     experimental: {
//         optimizeCss: true,  // ← inlines critical CSS, defers the rest
//     },
// }
// next.config.mjs
import bundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
  },
};

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(nextConfig);
