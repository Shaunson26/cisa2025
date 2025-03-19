let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
} catch (e) {
  // ignore error
}

/** @type {import('next').NextConfig} */
// https://github.com/vercel/next.js/blob/canary/packages/next/src/server/config-shared.ts 
const nextConfig = {
  output: 'export',
  //distDir: 'dist',
  basePath: process.env.IS_GITHUB_PAGES === 'true' ? '/cisa2025' : '',
  assetPrefix: process.env.IS_GITHUB_PAGES === 'true' ? '/cisa2025/' : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  // watchOptions: {
  //   pollIntervalMs: 10000
  // }
}

mergeConfig(nextConfig, userConfig)

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      }
    } else {
      nextConfig[key] = userConfig[key]
    }
  }
}

export default nextConfig
