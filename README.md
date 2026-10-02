# AllStackd agent plugin

Public **connector-only** package for agent marketplaces (Cursor, Grok, Antigravity, etc.).

It holds manifests, listing copy, an install skill, and MCP *client* config that points at the hosted AllStackd URL. It exists so marketplaces that require a public GitHub repo can review a tiny install surface — **not** so anyone can obtain the AllStackd product.

## Paid product — source stays closed

AllStackd is a **paid SaaS**. Nothing in this pack is the product.

| Open for marketplace visibility | Never published / never MIT-licensed |
|--------------------------------|--------------------------------------|
| This connector folder (or a separate public `allstackd-plugin` repo with the same few files) | Private application repository |
| JSON manifests, skill markdown, install docs | App Router, API routes, MCP *server* implementation |
| Remote URL string: `https://allstackd.com/api/mcp` | Databases, billing, AWS STS/SES integrations, queues, SDKs beyond public docs |

**Do not** open-source the main `allstackd` app. **Do not** copy product source into the public plugin repo. At submission time, publish only this thin pack (or extract it to its own public repo with no app code).

Users still need an AllStackd account and a paid or trial plan. An install only increases discoverability; it does not unlock sending or give away implementation.

**Product:** [https://allstackd.com](https://allstackd.com)  
**Hosted MCP (proprietary service):** `https://allstackd.com/api/mcp`  
**Support:** support@allstackd.com  
**Terms:** https://allstackd.com/terms

## What’s inside

| Path | Purpose |
|------|---------|
| `plugin.json` | Agent Plugins standard manifest |
| `.cursor-plugin/plugin.json` | Cursor marketplace manifest |
| `mcp.json` / `.mcp.json` | Remote MCP *client* config (URL + auth header placeholder) |
| `skills/allstackd/SKILL.md` | Agent skill: SES portfolio workflow + ICP qualifier |
| `antigravity/` | Installable Antigravity CLI plugin folder |
| `listing.md` | Copy, test prompts, and portal field values |
| `submissions/` | Per-vendor submission checklists (run after production) |

## Local test (Cursor)

1. Copy this directory to `~/.cursor/plugins/local/allstackd`.
2. Set `ALLSTACKD_API_KEY` in your environment (Dashboard → API keys).
3. Reload the Cursor window.
4. Open Customize and confirm the AllStackd skill and MCP server.
5. Call `list_projects` with a key bound to a Control project.

## Auth

Today the remote MCP expects:

```http
Authorization: Bearer as_...
```

Hosted OAuth is required before Claude Connectors and OpenAI plugin directory submission. See `submissions/oauth-and-annotations.md`.

## Positioning (do not change in listings)

> One email control plane for every product you run on Amazon SES.

Not a managed ESP. Not “unlimited free domains.” Not for first-app builders avoiding AWS.

## License

**This connector pack only:** MIT — see [LICENSE](./LICENSE) (scope notice: MIT does not cover the SaaS, API, or MCP server code).

**AllStackd product:** proprietary and closed-source. Service access is sold under https://allstackd.com/terms and Stripe billing.

Cursor and similar directories may require a public GitHub URL for the *plugin*. That public repo must remain connector-only (few files, no product source). The private application repo stays private forever.

## Install — Antigravity CLI

```bash
git clone https://github.com/kondasviktor/allstackd-plugin.git
agy plugin install "$(pwd)/allstackd-plugin/antigravity"
```

See [antigravity/README.md](./antigravity/README.md).

## Install — Grok Build (manual MCP)

```bash
grok mcp add --transport http allstackd https://allstackd.com/api/mcp
```

Set `Authorization: Bearer $ALLSTACKD_API_KEY`. Catalog install via the xAI plugin marketplace PR once merged.
