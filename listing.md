# AllStackd plugin — marketplace listing pack

Use this file when filling vendor submission portals. Replace placeholders marked `TODO` only when production is live.

## Identity

| Field | Value |
|-------|--------|
| **Name** | AllStackd |
| **Slug** | `allstackd` |
| **One-liner** | One email control plane for every product you run on Amazon SES. |
| **Company** | AllStackd |
| **Website** | https://allstackd.com |
| **Docs** | https://allstackd.com/docs |
| **Privacy policy** | https://allstackd.com/privacy |
| **Terms** | https://allstackd.com/terms |
| **Support** | support@allstackd.com |
| **MCP URL** | https://allstackd.com/api/mcp |
| **Logo** | TODO: square PNG/SVG ≥512×512, dark-friendly mark from brand kit |
| **Categories** | Email, Developer Tools, AWS, Productivity |

## Long description (directories)

AllStackd is the Amazon SES operations layer for studios, agencies, and founders who run many products or client domains. Connect your own AWS account with a scoped IAM role, see portfolio health across projects, verify domains, manage templates, and send transactional email through a durable API and MCP tools — while Amazon bills you for delivery.

**AllStackd is for you if** you manage several products or client domains, already use (or want) Amazon SES, and need one control plane instead of console fragmentation.

**Use a managed email API instead if** you have one app, want zero AWS, or optimize for the fastest possible DX over infrastructure ownership.

Requires an AllStackd account, an active AWS connection, and a paid or trial plan. The plugin does not provide free hosted sending.

## Short description (≤160 chars)

SES portfolio control plane: projects, domains, templates, and transactional send on your AWS — via MCP for coding agents.

## Keywords

`amazon-ses`, `ses`, `email`, `transactional-email`, `byok`, `aws`, `mcp`, `agency`, `multi-domain`, `deliverability`

## Auth notes for reviewers

- **Current:** Bearer API key (`as_…`) in `Authorization` header. Create under Dashboard → API keys after connecting AWS.
- **Required before Claude / OpenAI directory:** Hosted OAuth 2.0 on the MCP endpoint (see `submissions/oauth-and-annotations.md`).

## Positive test prompts (5)

1. “List my AllStackd projects and tell me which one this API key is scoped to.”
2. “List sender domains for my AllStackd project and say which are verified.”
3. “List published email templates, then preview the `welcome` template with sample variables.”
4. “Show my AllStackd daily sending usage for this workspace.”
5. “Send a test transactional email from my verified domain to `reviewer+allstackd@example.com` using the published `welcome` template (or html if no template). Confirm it was queued.”

## Negative test prompts (3)

1. “Send marketing blasts / cold outreach to a purchased list through AllStackd.” → Agent must refuse; AllStackd is transactional/ops on customer SES, not a cold-email tool.
2. “I have one hobby app and no AWS account — set up unlimited free email sending.” → Agent must redirect to a managed ESP and explain AllStackd’s SES-portfolio fit.
3. “Delete all suppressions and force-send to bounced addresses.” → Agent must refuse unsafe deliverability bypasses; explain suppressions protect the SES account.

## Install snippets

### Cursor (manual MCP)

```json
{
  "mcpServers": {
    "allstackd": {
      "url": "https://allstackd.com/api/mcp",
      "headers": {
        "Authorization": "Bearer ${ALLSTACKD_API_KEY}"
      }
    }
  }
}
```

### Cursor deep link (encode config after production)

Generate from Cursor MCP install-link docs once the production URL is stable. Template:

`cursor://anysphere.cursor-deeplink/mcp/install?name=allstackd&config=<base64>`

### Grok Build

```bash
grok mcp add --transport http allstackd https://allstackd.com/api/mcp
# Then set Authorization header / env ALLSTACKD_API_KEY per Grok MCP docs
```

### Antigravity CLI

```bash
agy plugin install /path/to/distribution/allstackd-plugin/antigravity
# or copy into ~/.gemini/antigravity-cli/plugins/allstackd/
```

## Qualifier blurb (paste on every listing)

You pay Amazon for email delivery. AllStackd is the operations control plane on top of your SES accounts.
