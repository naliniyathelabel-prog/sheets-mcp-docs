# sheets-mcp Docs

Documentation site for [sheets-mcp](https://sheets-mcp-xi.vercel.app) — the MCP server for Google Sheets.

Built with [Mintlify](https://mintlify.com). Deployed to [Cloudflare Pages](https://pages.cloudflare.com).

## Local preview

```bash
npm install -g mintlify
mintlify dev
```

Opens at `http://localhost:3000`.

## Deployment

### Cloudflare Pages (production)

Automatically deployed on every push to `main` via GitHub Actions.

**Required GitHub repository secrets:**

| Secret | Where to get it |
|---|---|
| `CF_API_TOKEN` | Cloudflare Dashboard → My Profile → API Tokens → Create Token (use "Edit Cloudflare Workers" template) |
| `CF_ACCOUNT_ID` | Cloudflare Dashboard → Workers & Pages → Account ID (right sidebar) |

### Manual deploy

```bash
npm install -g mintlify wrangler
mintlify build
wrangler pages deploy .mintlify/dist --project-name=sheets-mcp-docs
```

## Structure

```
mint.json                    # Mintlify config — navigation, colors, branding
index.mdx                    # Landing page
quickstart.mdx               # 5-step setup
authentication.mdx           # OIDC + API key
concepts/
  architecture.mdx           # System architecture
  safety.mdx                 # Write safety layers
  database.mdx               # Full DB schema
tools/
  overview.mdx               # 14 tools + AX guide
  read.mdx                   # list_spreadsheets, list_sheets, read_range
  write.mdx                  # write_range, append_rows, clear_range, format_cells
  analyze.mdx                # analyze_range, transform_range (SQL engine)
  manage.mdx                 # create_spreadsheet, manage_sheets, copy_sheet, batch_update_sheet, restore_snapshot
  drive.mdx                  # manage_drive
guides/
  connect-claude.mdx         # Claude Desktop setup
  connect-cursor.mdx         # Cursor IDE setup
  sql-in-sheets.mdx          # SQL cookbook
  self-deploy.mdx            # Self-host on Vercel
reference/
  errors.mdx                 # All typed errors with exact message text
  glossary.mdx               # Key terms — AX-first
  roadmap.mdx                # Known issues + planned work
changelog.mdx                # v1.0.0 → v1.1.0
```

## Source of truth

All content is derived from the sheets-mcp source code — `route.ts`, `sheets-safety.ts`, `mcp-google.ts`, `auth.ts`, `db.ts`, and the SQL migration scripts. The reference docs in the original zip were used as a secondary reference only. If anything conflicts, the source code wins.
