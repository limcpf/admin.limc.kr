/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
    async rewrites() {
      return [
        {
          source: "/api/:path*",
          destination: "http://localhost:8080/:path*",
        },
      ];
    },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
