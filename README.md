# sheets-mcp — Documentation

> Enterprise-grade docs for **sheets-mcp** — the Google Sheets MCP server that gives AI agents full Sheets API v4 coverage with context-window safety, formula protection, and a SQL-powered data engine.

[![Built with Mintlify](https://img.shields.io/badge/docs-mintlify-16a34a)](https://mintlify.com)
[![Live App](https://img.shields.io/badge/app-sheets--mcp.vercel.app-000)](https://sheets-mcp.vercel.app)

---

## What this repo is

This repo contains the **Mintlify documentation site** for sheets-mcp. The source app lives separately — this is docs only.

## Site structure

```
mint.json               Mintlify config (nav, colors, tabs, search)
index.mdx               Landing page — hero, tool surface, stack
quickstart.mdx          5-minute setup guide (Claude Desktop or Cursor)
authentication.mdx      OIDC + API key auth paths, token lifecycle
concepts/
  architecture.mdx      Next.js as OIDC provider + MCP server, request flow
  safety.mdx            Formula guards, ARRAYFORMULA protection, SQL sandbox
tools/
  overview.mdx          All 15 tools, design principles, 2026 MCP spec features
  read.mdx              list_spreadsheets, list_sheets, read_range
  write.mdx             write_range, append_rows, clear_range, format_cells
  analyze.mdx           analyze_range + transform_range SQL engine
  manage.mdx            create_spreadsheet, manage_sheets, copy_sheet,
                        batch_update_sheet, restore_snapshot
  drive.mdx             manage_drive (search + convert_to_spreadsheet)
guides/
  connect-claude.mdx    Claude Desktop OIDC setup walkthrough
  connect-cursor.mdx    Cursor IDE MCP setup walkthrough
  sql-in-sheets.mdx     AX-first SQL cookbook — patterns, anti-patterns, security
reference/
  errors.mdx            Every error code with exact message, cause, and agent fix
changelog.mdx           v1.0.0 → v1.1.0 with AX impact notes per change
```

## Local dev

```bash
npm i -g mintlify
mintlify dev
```

Visit `http://localhost:3000`.

## Deploy

Point the Mintlify dashboard at this repo (`naliniyathelabel-prog/sheets-mcp-docs`). Every push to `main` triggers a redeploy.

---

## Design principles applied

These docs are built on the **Diátaxis framework** (tutorials, how-to guides, reference, explanation) combined with 2026 AX (Agent Experience) standards:

- **AX first**: Every tool doc and guide is written from the agent's perspective first. Exact error messages, exact field names, exact recovery steps — no vagueness.
- **Source of truth**: All tool signatures, error messages, and behaviour are verified directly from `route.ts`, `sheets-safety.ts`, and `mcp-google.ts` — not from secondary docs.
- **Context economy**: Docs show agents when NOT to call tools (e.g. use `analyze_range` instead of `read_range` on large data).
- **Fail-closed transparency**: Safety systems are documented in detail so agents can reason about guards before triggering them.
