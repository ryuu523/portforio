import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

// リポジトリ名に置き換えてください
const repoName = 'portforio';

const nextConfig: NextConfig = {
  assetPrefix: isProd ? `/${repoName}/` : '',
  basePath: isProd ? `/${repoName}` : '',
  images: {
    unoptimized: true,
  },
  output: 'export',
};

export default nextConfig;