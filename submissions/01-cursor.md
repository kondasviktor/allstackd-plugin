# Cursor Marketplace + cursor.directory

**Status:** Ready after production (allstackd.com live, Stripe Studio checkout, AWS connect works, privacy page public).

**Bundle:** Parent directory of this file (`distribution/allstackd-plugin/`).

## Preconditions

- [ ] Production MCP responds at `https://allstackd.com/api/mcp`
- [ ] Reviewer API key can call `list_projects` and `send_email`
- [ ] This plugin package lives in a **public** GitHub repo that contains **only** this connector pack (Cursor Marketplace requires a public/open plugin for review). Suggested: extract/copy to `kondasviktor/allstackd-plugin`. **Never** open-source the private SaaS app or paste product source into that repo.
- [ ] Logo uploaded / linked from listing.md
- [ ] Local test passed from `~/.cursor/plugins/local/allstackd`

## A. Official Cursor Marketplace

1. Sign into Cursor with the publisher account.
2. Open https://cursor.com/marketplace/publish
3. Paste the public plugin repository URL.
4. Confirm the listing uses:
   - Name: **AllStackd**
   - Description from `listing.md` (long or short as the form allows)
   - Homepage: https://allstackd.com
   - Support: support@allstackd.com
5. Submit for **manual** review. Expect review on initial publish and on every update.
6. After approval, verify install: `/add-plugin allstackd` (or Customize → search AllStackd → Install).
7. Confirm skill + MCP appear; authenticate with `ALLSTACKD_API_KEY`.

Docs: https://cursor.com/docs/plugins

## B. cursor.directory (community)

Separate from the official marketplace. Submit both.

### Plugin auto-detect

1. Go to https://cursor.directory/plugins/new
2. Sign in with GitHub or Google.
3. Paste the public repo URL (must include root `.mcp.json` and/or `.cursor-plugin/plugin.json` for auto-detect).
4. Submit. Automated security agent reviews before the page goes live.

### MCP-only form (backup)

1. Go to https://cursor.directory/mcp/new
2. Fill:
   - Name: AllStackd
   - Description: from `listing.md` short description
   - Link to install instructions: repo README or https://allstackd.com/docs
   - Optional: Cursor deep link from `listing.md`
3. Submit.

## Post-publish checklist

- [ ] Official marketplace page URL saved
- [ ] cursor.directory plugin URL saved
- [ ] Install smoke-tested on a clean Cursor profile
- [ ] Homepage / docs link to the marketplace listing

## Notes

API-key auth is acceptable for Cursor for the first listing. Prefer OAuth once hosted MCP OAuth ships so the path matches Claude and OpenAI.
