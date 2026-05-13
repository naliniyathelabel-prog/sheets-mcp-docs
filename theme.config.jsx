import { useRouter } from 'next/router'

export default {
  logo: (
    <span style={{ fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>
      <span style={{ color: '#5A9E8F' }}>sheets</span>-mcp
    </span>
  ),
  project: {
    link: 'https://github.com/naliniyathelabel-prog/sheets-mcp',
  },
  chat: false,
  docsRepositoryBase: 'https://github.com/naliniyathelabel-prog/sheets-mcp-docs/blob/main',
  useNextSeoProps() {
    const { asPath } = useRouter()
    return {
      titleTemplate: asPath === '/' ? 'sheets-mcp' : '%s – sheets-mcp',
      description: 'Full Google Sheets API v4 coverage for AI agents — 14 tools, SQL engine, two auth paths.',
      openGraph: {
        siteName: 'sheets-mcp docs',
      },
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#5A9E8F" />
    </>
  ),
  primaryHue: 165,
  primarySaturation: 28,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  footer: {
    text: (
      <span>
        sheets-mcp · {' '}
        <a href="https://sheets-mcp-xi.vercel.app" target="_blank" rel="noopener">
          Live App ↗
        </a>
      </span>
    ),
  },
  navbar: {
    extraContent: (
      <a
        href="https://sheets-mcp-xi.vercel.app"
        target="_blank"
        rel="noopener"
        style={{
          fontSize: '0.875rem',
          padding: '0.4rem 0.9rem',
          borderRadius: '0.4rem',
          background: '#5A9E8F',
          color: '#fff',
          fontWeight: 600,
          textDecoration: 'none',
          marginLeft: '0.5rem',
          whiteSpace: 'nowrap',
        }}
      >
        Get started →
      </a>
    ),
  },
}
