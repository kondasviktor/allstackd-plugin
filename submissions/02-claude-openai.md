# Claude Connectors Directory + OpenAI plugin directory

**Status:** Claude connector **live** (community); plugin **submitted**; OpenAI directory still **parked**.

- **Claude connector:** Published at [claude.ai/directory/connectors/allstackd](https://claude.ai/directory/connectors/allstackd). Manage: [claude.ai/directory/manage/allstackd](https://claude.ai/directory/manage/allstackd).
- **Claude plugin:** Submitted — [manage plugins/…](https://claude.ai/directory/manage/plugins/8ea0fe3c-66a6-4250-870b-7710fbbaaae6). Pack: `.claude-plugin/plugin.json` + `.mcp.json` (`type: http`, OAuth URL). Public repo: https://github.com/kondasviktor/allstackd-plugin
- **User docs:** https://allstackd.com/docs → MCP beta → Claude Connectors Directory
- **OpenAI / ChatGPT / Codex:** OAuth MCP works in ChatGPT Dev Mode. Public directory submit **parked** (2026-10-14) — retry later via Platform Apps / Build-a-plugin + MCP (not skills-only ZIP). See §B.

**MCP URLs:**
- OAuth (Claude directory / ChatGPT custom MCP): `https://allstackd.com/mcp`
- API key (Cursor / Grok / CLI): `https://allstackd.com/api/mcp`

Use identity and test prompts from `../listing.md` when un-parking.

---

## A. Claude Connectors Directory + plugin bundle

Docs: https://claude.com/docs/connectors/building/submission · Plugins: https://claude.com/docs/plugins/submit

**Decision:** Done for the MCP connector (community listing). Keep plugin review/pairing and docs in sync.

### Done / in flight

- [x] Claude Pro (or higher) can open [claude.ai/directory/manage](https://claude.ai/directory/manage)
- [x] Remote MCP over HTTPS with **OAuth 2.0** (Clerk-backed)
- [x] Every tool has `title` + annotation hints (implemented in app)
- [x] Privacy policy + docs URLs public
- [x] Smoke-tested as a **custom connector** in Claude
- [x] MCP connector submitted, approved, and **published** (community)
- [x] `.claude-plugin/plugin.json` + `.mcp.json` with `"type": "http"` and `https://allstackd.com/mcp`
- [x] Plugin bundle submitted
- [x] Public docs: how to add AllStackd from the Claude Connectors Directory
- [ ] Pair plugin listing with the connector when the plugin is live
- [ ] Optional: pursue Verified label later (https://claude.com/docs/connectors/verification)

Managing listings: https://claude.com/docs/connectors/building/managing-your-listing

---

## B. OpenAI plugin directory (ChatGPT + Codex) — parked

Docs: https://developers.openai.com/plugins/deploy/submission · Apps: https://developers.openai.com/apps-sdk/deploy/submission · https://platform.openai.com/apps-manage

**Decision (2026-10-14):** Parked for a later retry. Do **not** treat saymd’s Platform listing as the template — saymd is **skills-only** (`MCP configuration: N/A`). New skills-only directory submissions are blocked (“We are not accepting more skills-only submissions”). AllStackd must ship as **remote MCP + optional skills**.

**What works today (private / Dev Mode):**

- OAuth MCP: `https://allstackd.com/mcp`
- ChatGPT custom MCP → **Create as a plugin** created Dev Mode app  
  `plugin_asdk_app_6acf813920a48191a49fe4d72da5091f` (Review status: **DEVELOPMENT**)
- That app does **not** appear under https://platform.openai.com/plugins next to saymd

### Lessons from the 2026-10-14 attempt

| Approach | Result |
|----------|--------|
| Upload ZIP on `chatgpt.com/plugins` or `platform.openai.com/plugins` | Metadata can validate; **MCPs** stays “This plugin does not reference any MCP server” → skills-only blocker on submit |
| Add `.codex-plugin/plugin.json` + `.mcp.json` URL | Still not enough for Platform to list a connectable MCP on the ZIP draft |
| ChatGPT **Add custom MCP** → Create as plugin | Works for personal Dev Mode; status DEVELOPMENT; not in Platform Plugins table |
| Expect ZIP draft to inherit `plugin_asdk_app_…` | Does not — two separate objects |

**Do not** put `plugin_asdk_app_…` in `.app.json` for public directory submit (portal rejects app references; submit the HTTPS endpoint via With MCP / Apps flow).

### Already done (keep)

- [x] Hosted MCP OAuth at `https://allstackd.com/mcp` (Clerk tokens)
- [x] OAuth metadata public (`/.well-known/oauth-protected-resource/mcp`, `/.well-known/oauth-authorization-server`)
- [x] OpenAI-required tool annotations + justifications in `lib/mcp/types.ts`
- [x] Package assets: `assets/logo.png`, `composerIcon`, `.codex-plugin/plugin.json`, `extensions.com.openai.interface` (subtitle ≤30, Communication, brand contrast)
- [x] Draft ZIP helper: `distribution/allstackd-openai.zip` (local build artifact; regenerate before retry)
- [x] Dev Mode MCP app connected in ChatGPT (see App ID above)

### Remaining before un-parking

- [ ] Open **Build a plugin** on Platform and/or https://platform.openai.com/apps-manage (not ZIP-only)
- [ ] Get AllStackd into a Platform draft that shows MCP connected + Scan Tools
- [ ] Or use `@plugin-creator` with `plugin_asdk_app_6acf813920a48191a49fe4d72da5091f` to scaffold a submittable package
- [ ] Short demo-recording URL (OAuth + five positive prompts)
- [ ] Reviewer demo account (no MFA) — see oauth-and-annotations.md
- [ ] Domain challenge when issued: `public/.well-known/openai-apps-challenge`
- [ ] Five positive + three negative tests from `listing.md` (OAuth-worded)
- [ ] Submit for review → Publish after approval

### Auth approach (no new paid SaaS)

Use **Clerk Hobby (free)** as the OAuth 2.0 authorization server for MCP:

- Enable **Publish CIMD support** in Clerk Dashboard → OAuth applications → Settings (prefer CIMD).
- Client admission: **Any compatible CIMD client**.
- Enable **Publish DCR support** only if ChatGPT / Scan Tools cannot use CIMD.
- Require PKCE (`S256`).
- Default scopes: `openid`, `profile`, `email`.
- Keep Bearer API keys on `/api/mcp` for Cursor and CLI installs.

### Steps (when un-parking)

1. Prefer Platform **Build a plugin** / **apps-manage** (MCP-first), not skills-only ZIP upload.
2. MCP URL: `https://allstackd.com/mcp` · OAuth · domain verify · Scan Tools.
3. Attach skills from this pack (or regenerate `distribution/allstackd-openai.zip`) onto that MCP draft if the UI allows.
4. Record demo video; fill listing + reviewer credentials from `listing.md`.
5. Submit for review; save Case ID; Publish after approval.
6. Link the live directory from https://allstackd.com/docs.

### Domain challenge note

When OpenAI issues the challenge token, add a route or static file:

`public/.well-known/openai-apps-challenge` → exact token body (no HTML).

Do not commit live challenge tokens forever; rotate if OpenAI re-issues.

---

## After either directory is live

- [ ] Link the directory from https://allstackd.com/docs
- [ ] Keep tool annotations in sync when adding MCP tools
