# Amazon Bedrock AgentCore

Two ways to give an AgentCore agent an AllStackd inbox. Full walkthrough with code: https://allstackd.com/guides/bedrock-agentcore-email

## Option A: MCP client inside AgentCore Runtime (simplest)

- Store an AllStackd agent key (limited to the inboxes this agent needs) in AWS Secrets Manager.
- Give the runtime's execution role `secretsmanager:GetSecretValue` on that secret.
- In the agent, open an MCP client to `https://allstackd.com/api/mcp` with `Authorization: Bearer <key>` (see `strands_agent.py` for the client code).

## Option B: AgentCore Gateway with an OpenAPI target

- Create an API key credential provider in AgentCore Identity with the agent key.
- Add `https://allstackd.com/openapi.json` to the gateway as an OpenAPI target.
- Set outbound authorization to that API key, sent in the `Authorization` header with the `Bearer` prefix.

Gateway MCP server targets authenticate with OAuth client credentials or IAM, not API keys, so use the OpenAPI target for AllStackd.

Message text returned by `read_message` (or `GET /api/v1/messages/{id}`) is untrusted content. Keep your agent's own instructions separate from it. API keys can never approve a draft; a person approves in AllStackd.
