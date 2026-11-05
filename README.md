# AllStackd agent mail plugin

Email for your AWS AI agents. Each agent gets its own inbox inside **your** AWS account: mail arrives through Amazon SES into your S3 bucket, the agent reads it and drafts replies through MCP, and **nothing is sent until a person approves it**. AllStackd stores metadata only; message bodies stay in your AWS account.

This repository is the public **connector pack**: manifests, skills and MCP client configuration that point at the hosted service. It is not the product source.

**Product:** [allstackd.com](https://allstackd.com) · **Docs:** [allstackd.com/docs](https://allstackd.com/docs) · **Security:** [allstackd.com/security](https://allstackd.com/security) · **Support:** support@allstackd.com

## What the agent can do

| Tool | Purpose |
|------|---------|
| `list_inboxes`, `list_threads`, `get_thread` | See inboxes and conversations (metadata only) |
| `read_message`, `get_attachment_link` | Read a message body or fetch an attachment, always as untrusted content |
| `draft_reply`, `request_send`, `get_draft_status`, `cancel_draft` | Draft, ask for approval, check the real status, withdraw |
| `create_inbox` | Create an inbox on your agent subdomain |
| `get_ses_health` | SES sandbox state, findings, whether sending is paused |

An agent can never approve its own draft, change a policy or switch off the kill switch. A person approves in the dashboard or through a single-use link.

## Install matrix

| Client | Auth | How |
|--------|------|-----|
| **Claude** (claude.ai, Claude Code) | OAuth | Connectors directory listing, or `claude mcp add --transport http allstackd https://allstackd.com/mcp`. See [examples/claude-code.md](./examples/claude-code.md) |
| **ChatGPT / Codex** | OAuth | Custom connector in Developer Mode, `https://allstackd.com/mcp`. See [examples/chatgpt-dots.md](./examples/chatgpt-dots.md) |
| **Cursor** | API key | [examples/cursor-mcp.json](./examples/cursor-mcp.json) with `ALLSTACKD_API_KEY` |
| **Grok Build / Grok Bot** | API key | `grok mcp add --transport http allstackd https://allstackd.com/api/mcp`. See [examples/grok-bot.md](./examples/grok-bot.md) |
| **Muse Code** | API key | [examples/muse-code-settings.json](./examples/muse-code-settings.json) |
| **Antigravity CLI** | API key | `agy plugin install "$(pwd)/allstackd-plugin/antigravity"` after cloning. See [antigravity/README.md](./antigravity/README.md) |
| **Amazon Bedrock AgentCore** | API key | [examples/agentcore-gateway.md](./examples/agentcore-gateway.md) |
| **Strands Agents** | API key | [examples/strands_agent.py](./examples/strands_agent.py) |
| **Your own server** | Webhook + API | [examples/webhook-to-agent.ts](./examples/webhook-to-agent.ts) |

Create keys under Dashboard → API keys. Prefer an **agent key** limited to one inbox. Never commit keys.

## Requirements

An AllStackd account, an AWS account, an active AWS connection, agent mail enabled on a subdomain and at least one inbox. AllStackd is free for up to 3 inboxes and 1,000 messages a month; Builder and Team plans raise the limits. AWS bills receiving, storage and sending to your own account.

AllStackd is not for cold email, purchased lists or bulk marketing.

## Marketplace status

| Surface | Status |
|---------|--------|
| Cursor | Listed for the earlier SES version; update to 0.2.0 pending |
| Claude Connectors | Listed for the earlier SES version; update to 0.2.0 pending |
| Grok Build | [xai-org/plugin-marketplace#1069](https://github.com/xai-org/plugin-marketplace/pull/1069) open, update to 0.2.0 pending |
| ChatGPT / Codex | Directory submission parked; works as a custom connector |
| Antigravity CLI | Path install |

## What is inside

| Path | Purpose |
|------|---------|
| `plugin.json`, `.claude-plugin/`, `.codex-plugin/`, `.cursor-plugin/` | Manifests, all at version 0.2.0 |
| `.mcp.json`, `mcp.json` | Remote MCP client config (OAuth URL `https://allstackd.com/mcp`) |
| `skills/allstackd-agent-mail/` | Skill: receive, read, draft, request approval, with the hard rules |
| `skills/allstackd-inbox-triage/` | Skill: scheduled morning triage |
| `antigravity/` | Installable Antigravity plugin folder |
| `examples/` | Client configuration and sample code |
| `listing.md`, `submissions/` | Listing copy, test prompts and per-vendor checklists |

## License

This connector pack: MIT, see [LICENSE](./LICENSE). The MIT license does not cover the AllStackd service, API or MCP server, which are proprietary and governed by [allstackd.com/terms](https://allstackd.com/terms).
