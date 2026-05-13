import nextra from 'nextra'

const withNextra = nextra({
  // No contentDirBasePath — default works with src/app/docs/[[...mdxPath]]
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
}

export default withNextra(nextConfig)
