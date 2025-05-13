/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // typescript: {
  //   ignoreBuildErrors: true, // It's better to fix errors
  // },
  // eslint: {
  //   ignoreDuringBuilds: true, // It's better to fix lint issues
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Ensure pageExtensions includes .js and .jsx if custom routing is used,
  // but Next.js default handles app router with .js/.jsx.
  // pageExtensions: ['js', 'jsx'],
};

module.exports = nextConfig;
