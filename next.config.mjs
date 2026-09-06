import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  turbopack: {
    root: __dirname,
  },
  images: {
    qualities: [25, 50, 75, 100],
  },
};

export default nextConfig;
