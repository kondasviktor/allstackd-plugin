# Grok Bot (and other scheduled agents)

Use an agent API key limited to the inbox the bot should work on.

1. In AllStackd: Dashboard → API keys → **Agent key**, pick the inbox, scopes `inbox:read`, `draft:write`, `send:request`. Do not grant `send:auto` unless the inbox policy allows auto-send.
2. In the bot's MCP settings add server `https://allstackd.com/api/mcp` with header `Authorization: Bearer <key>`.
3. Give it the `allstackd-inbox-triage` skill from this repository for a morning routine.

The bot drafts and requests approval. A person approves.
