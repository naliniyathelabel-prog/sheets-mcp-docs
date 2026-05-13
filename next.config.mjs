import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  defaultShowCopyCode: true,
  readingTime: true,
})

export default withNextra({
  output: 'export',          // static export for Vercel
  images: { unoptimized: true },
})
