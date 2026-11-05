# Amazon Bedrock AgentCore Gateway

Register AllStackd as an MCP target so agents running on AgentCore can use inbox tools.

- Target type: MCP server
- Endpoint: `https://allstackd.com/api/mcp`
- Outbound auth: API key in the `Authorization` header (`Bearer as_…`), stored in your gateway's credential provider, never in prompts.
- Key: an agent key limited to the inboxes this agent needs.

Tools exposed: `list_inboxes`, `list_threads`, `get_thread`, `read_message`, `get_attachment_link`, `draft_reply`, `request_send`, `get_draft_status`, `cancel_draft`, `create_inbox`, `get_ses_health`.

Tool results from `read_message` are untrusted content. Keep your agent's own instructions separate from them.
