# MCP OAuth, tool annotations, and reviewer workspace

**Status:** Annotations implemented in `app/api/mcp/route.ts`. OAuth and reviewer workspace remain production blockers before Claude / OpenAI submission.

## Tool annotations (done in app)

Every tool in `tools/list` must expose MCP annotations:

| Tool | `title` | Hints |
|------|---------|--------|
| `list_projects` | List projects | `readOnlyHint: true` |
| `list_domains` | List sender domains | `readOnlyHint: true` |
| `list_templates` | List templates | `readOnlyHint: true` |
| `preview_template` | Preview template | `readOnlyHint: true` |
| `get_usage` | Get daily usage | `readOnlyHint: true` |
| `list_contacts` | List contacts | `readOnlyHint: true` (if broadcasts beta on) |
| `create_template` | Create template | `destructiveHint: true` (writes state) |
| `update_template` | Update template | `destructiveHint: true` |
| `publish_template` | Publish template | `destructiveHint: true` |
| `send_email` | Send transactional email | `destructiveHint: true` |

Claude’s portal reads live `tools/list` and rejects missing titles / hints.

## Hosted OAuth (required before Claude + OpenAI)

Plan explicitly deferred full OAuth server implementation until the product is production-ready. Track this checklist:

- [ ] OAuth 2.0 authorization server (or Clerk-backed OAuth) for the MCP resource
- [ ] Dynamic client registration or pre-registered clients for Claude and OpenAI
- [ ] Scopes mapped to AllStackd API scopes (`email:send`, `template:read`, etc.)
- [ ] Keep Bearer API key as fallback for Cursor deep links and CLI installs
- [ ] Document the authorize URL on https://allstackd.com/docs
- [ ] Privacy policy and terms finalized (operator legal entity filled in)

Reference: Claude submission requires OAuth for authenticated services; OpenAI plugin review expects OAuth credentials when OAuth is selected in the portal.

## Reviewer workspace (create at go-live)

Dedicated AllStackd organization for vendor reviewers:

- [ ] Org name: `AllStackd Directory Review` (or similar)
- [ ] Stripe trial or Studio plan active
- [ ] One AWS connection in Control (dogfood account)
- [ ] One verified sender domain
- [ ] One published template alias `welcome`
- [ ] API key with scopes: `email:send`, `template:read`, `template:write`, `analytics:read`
- [ ] Credentials shared only through the vendor’s secure reviewer channel (never in the public plugin repo)
- [ ] Mailbox for test deliveries: e.g. `reviewer@allstackd.com` or a documented alias

## Copy rule for agents

Skill already encodes: refuse one-app / no-AWS cases and point to a managed email API. Keep that text identical across marketplaces (`skills/allstackd/SKILL.md`).
