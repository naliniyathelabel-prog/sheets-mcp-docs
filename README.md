# sheets-mcp docs

> Enterprise documentation site for **sheets-mcp** — the Google Sheets MCP server that gives AI agents full Sheets API v4 coverage.

Built with [Mintlify](https://mintlify.com) · [Live site](https://sheets-mcp.vercel.app)

## Structure

```
docs/
├── mint.json            # Mintlify config
├── index.mdx            # Home / landing
├── quickstart.mdx       # 5-minute quickstart
├── authentication.mdx   # Auth guide (OIDC + API key)
├── concepts/
│   ├── architecture.mdx
│   └── safety.mdx
├── tools/
│   ├── overview.mdx
│   ├── read.mdx
│   ├── write.mdx
│   ├── analyze.mdx
│   ├── manage.mdx
│   └── drive.mdx
├── guides/
│   ├── connect-claude.mdx
│   ├── connect-cursor.mdx
│   └── sql-in-sheets.mdx
├── reference/
│   └── errors.mdx
└── changelog.mdx
```

## Local dev

```bash
npm i -g mintlify
mintlify dev
```
