# AllStackd agent plugin

Public **connector-only** package for agent marketplaces. Manifests, skill, and MCP *client* config point at the hosted AllStackd URL — **not** the AllStackd product source.

**Product:** [https://allstackd.com](https://allstackd.com) · **Docs:** [https://allstackd.com/docs](https://allstackd.com/docs) · **MCP:** `https://allstackd.com/api/mcp` · **Support:** support@allstackd.com

## Marketplace status

| Surface | Status | Notes |
|---------|--------|-------|
| **Cursor** | Live | [cursor.directory/plugins/allstackd](https://cursor.directory/plugins/allstackd) (+ official marketplace queue if submitted) |
| **Grok Build** | Submitted | [xAI plugin-marketplace PR #1069](https://github.com/xai-org/plugin-marketplace/pull/1069). Manual MCP works today (below). |
| **Antigravity CLI** | Available | Path install — Google has no self-serve third-party catalog yet. |
| **Claude Connectors** | Live | [claude.ai/directory/connectors/allstackd](https://claude.ai/directory/connectors/allstackd) (community). Docs: [allstackd.com/docs](https://allstackd.com/docs) → MCP. |
| **Claude plugin** | Submitted | [Plugin manage](https://claude.ai/directory/manage/plugins/8ea0fe3c-66a6-4250-870b-7710fbbaaae6) — skill + OAuth MCP reference |
| **ChatGPT / Codex** | Parked | OAuth MCP live at `https://allstackd.com/mcp`; directory submit deferred (demo video required) |

Set `ALLSTACKD_API_KEY` (Dashboard → API keys) after any install.

## Paid product — source stays closed

AllStackd is a **paid SaaS**. Nothing in this pack is the product.

| Open for marketplace visibility | Never published / never MIT-licensed |
|--------------------------------|--------------------------------------|
| This connector repo | Private application repository |
| JSON manifests, skill markdown, install docs | App Router, API routes, MCP *server* implementation |
| Remote URL: `https://allstackd.com/api/mcp` | Databases, billing, AWS STS/SES integrations, queues |

Users still need an AllStackd account and a paid or trial plan. An install only increases discoverability.

## What’s inside

| Path | Purpose |
|------|---------|
| `.claude-plugin/plugin.json` | Claude directory / Claude Code manifest |
| `plugin.json` | Agent Plugins standard manifest |
| `.cursor-plugin/plugin.json` | Cursor marketplace manifest |
| `.mcp.json` / `mcp.json` | Remote MCP for Claude (`type: http`, OAuth URL `https://allstackd.com/mcp`) |
| `.claude-plugin/icon.png` | Directory listing icon (512×512 PNG) |
| `skills/allstackd/SKILL.md` | Agent skill: SES portfolio workflow + ICP qualifier |
| `antigravity/` | Installable Antigravity CLI plugin folder |
| `listing.md` | Copy, test prompts, and portal field values |
| `submissions/` | Per-vendor submission checklists |

## Auth

```http
Authorization: Bearer as_...
```

Claude / ChatGPT use OAuth at `https://allstackd.com/mcp` (Clerk). Cursor / Grok / CLI use Bearer API keys on `https://allstackd.com/api/mcp` — set the header in the host UI (do not commit secrets). See `submissions/oauth-and-annotations.md`.

## Install — Antigravity CLI

```bash
git clone https://github.com/kondasviktor/allstackd-plugin.git
agy plugin install "$(pwd)/allstackd-plugin/antigravity"
```

See [antigravity/README.md](./antigravity/README.md).

## Install — Grok Build

Manual MCP (works now):

```bash
grok mcp add --transport http allstackd https://allstackd.com/api/mcp
```

Set `Authorization: Bearer $ALLSTACKD_API_KEY`. After the marketplace PR merges: `grok plugin install allstackd --trust` (or `/marketplace` in Grok Build).

## Local test (Cursor)

1. Copy this directory to `~/.cursor/plugins/local/allstackd`.
2. Set `ALLSTACKD_API_KEY` in your environment.
3. Reload Cursor → Customize → confirm skill + MCP.
4. Call `list_projects` with a key bound to a Control project.

## Positioning (do not change in listings)

> One email control plane for every product you run on Amazon SES.

Not a managed ESP. Not “unlimited free domains.” Not for first-app builders avoiding AWS.

## License

**This connector pack only:** MIT — see [LICENSE](./LICENSE) (MIT does not cover the SaaS, API, or MCP server code).

**AllStackd product:** proprietary. Service access under https://allstackd.com/terms and Stripe billing.
