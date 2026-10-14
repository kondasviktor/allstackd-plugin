# Claude Connectors Directory + OpenAI plugin directory

**Status:** Claude connector **submitted**; OpenAI directory still **parked**.

- **Claude:** MCP connector submitted from Pro at [claude.ai/directory/manage/allstackd](https://claude.ai/directory/manage/allstackd). Plugin bundle uses `.claude-plugin/plugin.json` + `.mcp.json` (`type: http`, OAuth URL). Public repo: https://github.com/kondasviktor/allstackd-plugin
- **OpenAI / ChatGPT / Codex:** Product OAuth MCP is live (`https://allstackd.com/mcp`, Clerk CIMD), but public directory submission is parked until a required demo-recording video is ready.

**MCP URLs (still live for personal / custom use):**
- OAuth (ChatGPT / Codex custom MCP): `https://allstackd.com/mcp`
- API key (Cursor / Grok / CLI): `https://allstackd.com/api/mcp`

Use identity and test prompts from `../listing.md` when un-parking.

---

## A. Claude Connectors Directory + plugin bundle

Docs: https://claude.com/docs/connectors/building/submission · Plugins: https://claude.com/docs/plugins/submit

**Decision:** Un-parked. Any paid Claude plan (Pro+) can submit. MCP connector is in review; fix plugin validation on the public connector repo as needed.

### Done / in flight

- [x] Claude Pro (or higher) can open [claude.ai/directory/manage](https://claude.ai/directory/manage)
- [x] Remote MCP over HTTPS with **OAuth 2.0** (Clerk-backed)
- [x] Every tool has `title` + annotation hints (implemented in app)
- [x] Privacy policy + docs URLs public
- [x] Smoke-tested as a **custom connector** in Claude
- [x] MCP connector submitted
- [x] `.claude-plugin/plugin.json` + `.mcp.json` with `"type": "http"` and `https://allstackd.com/mcp`
- [ ] Reviewer workspace credentials confirmed in portal (see oauth-and-annotations.md)
- [ ] Plugin bundle validation passes → submit for review → pair with connector

Managing listings: https://claude.com/docs/connectors/building/managing-your-listing

---

## B. OpenAI plugin directory (ChatGPT + Codex) — parked

Docs: https://developers.openai.com/plugins/deploy/submission  
Review requirements: https://developers.openai.com/plugins/deploy/app-review

**Decision:** Parked. Hosted MCP OAuth and Clerk CIMD are done. OpenAI’s remote MCP directory flow still requires a **demo-recording URL** (video walkthrough of OAuth + the five positive test cases). Not recording that now — revisit when ready to film a short unlisted YouTube/Loom clip.

Custom MCP connect in ChatGPT (non-directory) remains available at `https://allstackd.com/mcp`.

### Already done (keep)

- [x] Hosted MCP OAuth at `https://allstackd.com/mcp` (Clerk tokens)
- [x] OAuth metadata public (`/.well-known/oauth-protected-resource/mcp`, `/.well-known/oauth-authorization-server`)
- [x] OpenAI-required tool annotations + justifications in `lib/mcp/types.ts`
- [x] Clerk **Publish CIMD support** + admission: Any compatible CIMD client
- [x] Universal MCP URL, privacy, terms, docs

### Remaining before un-parking

- [ ] Short demo-recording URL (required for MCP directory submit)
- [ ] Reviewer demo account (no MFA) — see oauth-and-annotations.md
- [ ] Smoke-test custom MCP in ChatGPT (OAuth → tools)
- [ ] Portal **Scan Tools** + domain challenge (`/.well-known/openai-apps-challenge` when issued)
- [ ] Five positive + three negative tests from `listing.md` (OAuth-worded)
- [ ] Logo (≥512 square PNG)

### Auth approach (no new paid SaaS)

Use **Clerk Hobby (free)** as the OAuth 2.0 authorization server for MCP:

- Enable **Publish CIMD support** in Clerk Dashboard → OAuth applications → Settings (prefer CIMD).
- Client admission: **Any compatible CIMD client**.
- Enable **Publish DCR support** only if OpenAI’s client does not support CIMD.
- Require PKCE (`S256`).
- Default scopes: `openid`, `profile`, `email`.
- Keep Bearer API keys on `/api/mcp` for Cursor and CLI installs.

### Steps (when un-parking)

1. Record demo video (OAuth connect + five positive prompts); host unlisted.
2. Open the OpenAI **plugin submission portal**.
3. Choose **With MCP** (or upload ZIP + connect MCP).
4. Enter production MCP URL: `https://allstackd.com/mcp`.
5. Complete OAuth discovery; run **Scan Tools**.
6. Complete domain verification if prompted (`/.well-known/openai-apps-challenge`).
7. Fill name, logo, description, company, privacy, localization, test prompts, demo URL, reviewer credentials from `listing.md`.
8. Submit for review; save the Case ID from the confirmation email.
9. After approval, **Publish** from the portal (unpublished approvals stay invisible).
10. Confirm the listing appears in the ChatGPT / Codex Plugins Directory.

### Domain challenge note

When OpenAI issues the challenge token, add a route or static file:

`public/.well-known/openai-apps-challenge` → exact token body (no HTML).

Do not commit live challenge tokens forever; rotate if OpenAI re-issues.

---

## After either directory is live

- [ ] Link the directory from https://allstackd.com/docs
- [ ] Keep tool annotations in sync when adding MCP tools
