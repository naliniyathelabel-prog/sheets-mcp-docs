import nextra from 'nextra'

const withNextra = nextra({
  contentDirBasePath: '/docs',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  experimental: {
    turbopack: false,
  },
}

export default withNextra(nextConfig)
