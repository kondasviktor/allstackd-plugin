# Claude Connectors Directory + OpenAI plugin directory

**Status:** Blocked until hosted MCP OAuth is live. Annotations and listing copy are ready. See `oauth-and-annotations.md`.

**MCP URL:** `https://allstackd.com/api/mcp`

Use identity and test prompts from `../listing.md`.

---

## A. Claude Connectors Directory

Docs: https://claude.com/docs/connectors/building/submission

### Preconditions

- [ ] Anthropic **Team** or **Enterprise** org (Individual plans lack the submission portal)
- [ ] Owner / Directory permission on that org
- [ ] Remote MCP over HTTPS with **OAuth 2.0**
- [ ] Every tool has `title` + `readOnlyHint` or `destructiveHint` (implemented in app)
- [ ] Privacy policy + docs URLs public
- [ ] Reviewer workspace populated (see oauth-and-annotations.md)
- [ ] Smoke-tested as a **custom connector** in Claude before directory submit

### Steps

1. Sign into Claude.ai as org Owner.
2. Open **Organization settings → Directory** (submission portal).
3. Submit the remote MCP server (not an MCPB desktop extension).
4. Paste listing fields from `listing.md` (tagline, description, categories, docs, privacy, support, icon).
5. Provide reviewer test credentials through the portal’s secure channel.
6. Track status under Organization settings → Directory.
7. Address reviewer feedback and resubmit from the same page.
8. Expect **community** listing first; **verified** is Anthropic’s later selection.

Managing listings: https://claude.com/docs/connectors/building/managing-your-listing

---

## B. OpenAI plugin directory (ChatGPT + Codex)

Docs: https://developers.openai.com/plugins/deploy/submission  
Review requirements: https://developers.openai.com/plugins/deploy/app-review

The legacy ChatGPT “plugins” store is replaced by this MCP plugin flow. One approval publishes to the directory shared by ChatGPT and Codex after you click Publish.

### Preconditions

- [ ] MCP works in ChatGPT **developer mode**
- [ ] OAuth configured; portal can Scan Tools successfully
- [ ] Domain verification: host token at `https://allstackd.com/.well-known/openai-apps-challenge`
- [ ] Universal MCP URL (not per-tenant template URL)
- [ ] Five positive + three negative tests from `listing.md`
- [ ] Logo, company URL, privacy policy

### Steps

1. Open the OpenAI **plugin submission portal**.
2. Choose **With MCP** (do not enter an existing connector / app id).
3. Enter production MCP URL: `https://allstackd.com/api/mcp`.
4. Add OAuth credentials; run **Scan Tools**.
5. Complete CSP / domain verification if prompted (`/.well-known/openai-apps-challenge`).
6. Fill name, logo, description, company, privacy, localization, test prompts/responses from `listing.md`.
7. Submit for review; save the Case ID from the confirmation email.
8. After approval, **Publish** from the portal (unpublished approvals stay invisible).
9. Confirm the listing appears in the ChatGPT / Codex Plugins Directory.

### Domain challenge note

When OpenAI issues the challenge token, add a route or static file:

`public/.well-known/openai-apps-challenge` → exact token body (no HTML).

Do not commit live challenge tokens forever; rotate if OpenAI re-issues.

---

## After both are live

- [ ] Link both directories from https://allstackd.com/docs
- [ ] Monitor Claude Directory health dashboard for errors/latency
- [ ] Keep tool annotations in sync when adding MCP tools
