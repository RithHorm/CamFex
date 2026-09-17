import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pins the workspace root so Turbopack doesn't walk up to a stray
  // package.json in the user's home directory.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
