# Marketplace submissions

One vendor at a time, after the agent mail production deploy and the v0.2.0 tag. Work top-down. **Status after v0.2.0:** listings that already exist describe the earlier SES version and need re-submission with the 0.2.0 copy from `../listing.md`; nothing has been submitted.

**IP rule:** AllStackd is a closed-source service. Public marketplace GitHub repos must be **connector-only** (this pack). Never publish `app/`, `lib/`, `db/`, or MCP server implementation.

| Order | Guide | When |
|------:|-------|------|
| 0 | [oauth-and-annotations.md](./oauth-and-annotations.md) | Clerk MCP OAuth + annotations (done in app; Clerk Dashboard CIMD still operator) |
| 1 | [01-cursor.md](./01-cursor.md) | First agent listing (live on cursor.directory) |
| 2 | [02-claude-openai.md](./02-claude-openai.md) | Claude connector **live**. Plugin submitted. OpenAI directory **parked** (retry later; Platform UX notes in guide). |
| 3 | [03-aws-marketplace.md](./03-aws-marketplace.md) | Highest paid-intent channel (revisit for agent mail) |
| 4–5 | [04-grok-antigravity.md](./04-grok-antigravity.md) | Same plugin bundle; Antigravity is path-install only |

Listing copy and test prompts: [../listing.md](../listing.md)
