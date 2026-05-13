import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  defaultShowCopyCode: true,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['nextra', 'nextra-theme-docs'],
  images: { unoptimized: true },
}

export default withNextra(nextConfig)
