export const runtime = 'edge';

const body = `# sheets-mcp

> AI-readable docs index for agents.

- /docs — Docs home
- /docs/quickstart — Quickstart
- /docs/authentication — Authentication
- /docs/concepts/architecture — Architecture
- /docs/concepts/safety — Safety Systems
- /docs/tools/overview — Tools Overview
- /docs/tools/read — Read Tools
- /docs/tools/write — Write Tools
- /docs/tools/analyze — Analyze Tools
- /docs/tools/manage — Manage Tools
- /docs/tools/drive — Drive Tools
- /docs/guides/connect-claude — Connect Claude Desktop
- /docs/guides/connect-cursor — Connect Cursor
- /docs/guides/sql-in-sheets — SQL in Sheets
- /docs/guides/self-deploy — Self-Deploy
- /docs/reference/errors — Error Reference
- /docs/reference/glossary — Glossary
- /docs/reference/roadmap — Roadmap & Known Issues
- /docs/changelog — Changelog
`;

export async function GET() {
  return new Response(body, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=3600',
    },
  });
}
