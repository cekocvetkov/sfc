/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  async rewrites() {
    return [
      {
        source: "/umami.js",
        destination: "http://192.168.0.10:3000/script.js",
      },
      {
        source: "/api/send",
        destination: "http://192.168.0.10:3000/api/send",
      },
    ];
  },
};

export default nextConfig;
