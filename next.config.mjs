import nextra from 'nextra'

const withNextra = nextra()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
}

export default withNextra(nextConfig)
