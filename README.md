# sheets-mcp Docs

Documentation for [sheets-mcp](https://sheets-mcp-xi.vercel.app) — the MCP server for Google Sheets.

**Stack:** Next.js 15 + Nextra 4 + nextra-theme-docs. Deploys to Vercel with zero config.

---

## Deploy to Vercel (30 seconds)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/naliniyathelabel-prog/sheets-mcp-docs)

Or manually:
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import `naliniyathelabel-prog/sheets-mcp-docs`
3. Click **Deploy** — Vercel auto-detects Next.js, no config needed

Your docs go live at `https://sheets-mcp-docs.vercel.app` instantly.

---

## Local dev

```bash
git clone https://github.com/naliniyathelabel-prog/sheets-mcp-docs
cd sheets-mcp-docs
npm install
npm run dev
# → http://localhost:3000
```

Tunnel for sharing:
```bash
cloudflared tunnel --url http://localhost:3000
```

---

## Build

```bash
npm run build   # next build → static export to out/
```

---

## Structure

```
pages/
  _meta.json              # Root sidebar nav
  index.mdx               # Landing
  quickstart.mdx
  authentication.mdx
  changelog.mdx
  concepts/
    _meta.json
    architecture.mdx
    safety.mdx
    database.mdx
  tools/
    _meta.json
    overview.mdx
    read.mdx  write.mdx  analyze.mdx  manage.mdx  drive.mdx
  guides/
    _meta.json
    connect-claude.mdx  connect-cursor.mdx
    sql-in-sheets.mdx   self-deploy.mdx
  reference/
    _meta.json
    errors.mdx  glossary.mdx  roadmap.mdx

theme.config.jsx          # Nextra theme — colors, navbar, footer
next.config.mjs           # Nextra plugin config
package.json              # Next.js 15 + Nextra 4
vercel.json               # Vercel deploy config
```

---

## Source of truth

All content sourced from `route.ts`, `sheets-safety.ts`, `mcp-google.ts`, `auth.ts`, `db.ts`, and SQL migration scripts. Reference docs used as secondary reference only — source code wins on conflicts.
