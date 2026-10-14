# MCP OAuth, tool annotations, and reviewer workspace

**Status:** Tool annotations (including OpenAI-required `openWorldHint`) are implemented. Hosted MCP OAuth is implemented via **Clerk Hobby** at `https://allstackd.com/mcp`. API-key MCP remains at `https://allstackd.com/api/mcp`. Claude Connectors Directory listing is **live** (community); OpenAI directory is still parked (see `02-claude-openai.md`).

## Tool annotations (done in app)

Every tool in `tools/list` exposes MCP annotations with all three hints:

| Tool | `title` | Hints |
|------|---------|--------|
| `list_projects` | List projects | `readOnlyHint: true`, `destructiveHint: false`, `openWorldHint: false` |
| `list_domains` | List sender domains | read-only |
| `list_templates` | List templates | read-only |
| `preview_template` | Preview template | read-only |
| `get_usage` | Get daily usage | read-only |
| `list_contacts` | List contacts | read-only (if broadcasts beta on) |
| `create_template` | Create template | `destructiveHint: true` |
| `update_template` | Update template | `destructiveHint: true` |
| `publish_template` | Publish template | `destructiveHint: true` |
| `send_email` | Send transactional email | `destructiveHint: true`, `openWorldHint: true` |

Portal justifications live in `lib/mcp/types.ts` (`MCP_TOOL_JUSTIFICATIONS`) for the OpenAI submission form.

## Hosted OAuth (Clerk Hobby — implemented)

No extra paid auth product. Clerk is the OAuth authorization server for MCP clients (ChatGPT / Codex).

### App routes

| Route | Purpose |
|-------|---------|
| `https://allstackd.com/mcp` | Streamable HTTP MCP + Clerk OAuth (OpenAI path) |
| `https://allstackd.com/api/mcp` | JSON-RPC MCP + Bearer API key (Cursor / Grok / CLI) |
| `/.well-known/oauth-protected-resource/mcp` | RFC 9728 protected resource metadata |
| `/.well-known/oauth-authorization-server` | RFC 8414 auth server metadata (Clerk) |

### Operator checklist (Clerk Dashboard — required before OpenAI submit)

- [ ] OAuth applications → Settings → **Publish CIMD support** (prefer CIMD)
- [ ] Enable **Publish DCR support** only if ChatGPT / Scan Tools cannot use CIMD
- [ ] Require PKCE (`S256`)
- [ ] Default scopes: `openid`, `profile`, `email`
- [ ] Pre-register OpenAI/ChatGPT client if CIMD admission is restricted to pre-registered clients
- [ ] Keep Bearer API key as fallback for Cursor deep links and CLI installs
- [ ] Document OAuth MCP URL on https://allstackd.com/docs
- [ ] Privacy policy and terms finalized (operator legal entity filled in)

### Engineering notes

- OAuth sessions map Clerk `userId` → personal AllStackd workspace → default (oldest) project, with operator scopes (`email:send`, `template:*`, `analytics:read`, `contact:read`).
- Tool handlers accept optional `projectId` for OAuth multi-project workspaces.
- Source: `app/mcp/route.ts`, `lib/mcp/*`, `@clerk/mcp-tools`, `mcp-handler`.

## Reviewer workspace (create at go-live)

Dedicated AllStackd organization for vendor reviewers:

- [ ] Org name: `AllStackd Directory Review` (or similar)
- [ ] Stripe trial or Studio plan active
- [ ] One AWS connection in Control (dogfood account)
- [ ] One verified sender domain
- [ ] One published template alias `welcome`
- [ ] Reviewer signs into Clerk (no MFA) for OAuth MCP; optional API key for `/api/mcp` smoke tests
- [ ] Credentials shared only through the vendor’s secure reviewer channel (never in the public plugin repo)
- [ ] Mailbox for test deliveries: e.g. `reviewer@allstackd.com` or a documented alias

## Copy rule for agents

Skill already encodes: refuse one-app / no-AWS cases and point to a managed email API. Keep that text identical across marketplaces (`skills/allstackd/SKILL.md`).
