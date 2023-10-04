/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/products",
        destination: "https://dummyjson.com/products",
      },
      {
        source: "/api/products/:id",
        destination: 'https://dummyjson.com/products/:id',
      }
    ]
  },
}

module.exports = nextConfig
