# NEXT_ACTION.md

## Branch: feat/migrate-content-nextra4
## Status: READY TO MERGE → main → Vercel deploy

---

## What this branch does

Completes the Nextra 4 App Router migration:
- Moves all 20 MDX files from `pages/` (Nextra 2 style) → `src/content/` (Nextra 4 App Router)
- All scaffold already on main: `src/app/layout.jsx`, catch-all route, `mdx-components.js`
- All `_meta.js` files already on main

---

## Acceptance criteria (all met ✅)

- [x] 20 MDX files in `src/content/`
- [x] `_meta.js` at each content subdirectory
- [x] `src/app/layout.jsx` with sheets-mcp branding
- [x] `src/app/[[...mdxPath]]/page.jsx` catch-all
- [x] `mdx-components.js` registered
- [x] `next.config.mjs` — correct Nextra 4 config, no output:export
- [x] `vercel.json` — framework: nextjs, no outputDirectory override
- [x] `package.json` — Next.js 16.2.3 + Nextra 4.6.1

---

## Next steps after merge

1. **Delete `pages/` directory** (old Nextra 2 structure) — after confirming Vercel build green
2. **Connect to Vercel:**
   - Go to vercel.com/new
   - Import `naliniyathelabel-prog/sheets-mcp-docs`
   - Click Deploy
   - URL: `https://sheets-mcp-docs.vercel.app`
3. **Post-deploy smoke test:**
   - [ ] `/` loads Introduction page
   - [ ] Sidebar all 5 groups visible
   - [ ] `/tools/analyze` SQL engine reference renders
   - [ ] `/reference/glossary` renders
   - [ ] Dark mode toggle works
   - [ ] Live App → button links to sheets-mcp-xi.vercel.app

---

## Rollback

If Vercel build fails:
```bash
git revert HEAD~1
git push origin main
```
`pages/` directory still intact as fallback.

---

## Known deferred work

- Delete `pages/` after green deploy
- Delete `mint.json` + old `theme.config.jsx` (Mintlify artefacts)
- Add `pagefind` for offline search (optional)
- Set `metadataBase` to real Vercel URL once known
