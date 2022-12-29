/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  distDir: "build",
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/zz",
        destination: "/form",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api",
        destination: "https://billions-api.nomadcoders.workers.dev/",
      },
      {
        source: "/api/person/:id",
        destination: "https://billions-api.nomadcoders.workers.dev/person/:id",
      },
    ];
  },
};

module.exports = nextConfig;
