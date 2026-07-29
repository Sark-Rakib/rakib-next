/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    qualities: [25, 50, 75, 100],
  },
};

export default nextConfig;
