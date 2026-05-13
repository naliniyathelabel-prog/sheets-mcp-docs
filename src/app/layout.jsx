import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  metadataBase: new URL('https://sheets-mcp-docs.vercel.app'),
  title: { template: '%s – sheets-mcp' },
  description: 'Full Google Sheets API v4 coverage for AI agents — 14 tools, SQL engine, two auth paths.',
  applicationName: 'sheets-mcp docs',
}

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <span style={{ fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>
          <span style={{ color: '#5A9E8F' }}>sheets</span>-mcp
          <span style={{ fontWeight: 400, opacity: 0.5, marginLeft: '0.5rem', fontSize: '0.85rem' }}>docs</span>
        </span>
      }
      projectLink="https://github.com/naliniyathelabel-prog/sheets-mcp"
    >
      <a
        href="https://sheets-mcp-xi.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: '0.85rem',
          padding: '0.35rem 0.85rem',
          borderRadius: '0.4rem',
          background: '#5A9E8F',
          color: '#fff',
          fontWeight: 600,
          textDecoration: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        Live App →
      </a>
    </Navbar>
  )

  const pageMap = await getPageMap()

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          footer={
            <Footer>
              <span>
                sheets-mcp ·{' '}
                <a href="https://sheets-mcp-xi.vercel.app" target="_blank" rel="noopener">
                  Live App ↗
                </a>
                {' · '}
                <a href="https://github.com/naliniyathelabel-prog/sheets-mcp" target="_blank" rel="noopener">
                  GitHub ↗
                </a>
              </span>
            </Footer>
          }
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/naliniyathelabel-prog/sheets-mcp-docs/blob/main"
          sidebar={{ defaultMenuCollapseLevel: 1, toggleButton: true }}
          toc={{ backToTop: true }}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
