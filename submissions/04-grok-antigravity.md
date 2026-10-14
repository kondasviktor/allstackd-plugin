# Grok Build marketplace + Antigravity CLI

**Status:** Plugin files are ready in this package. Submit to Grok after the public plugin repo exists. Antigravity is install-from-folder only (no self-serve catalog).

---

## A. Grok Build (`xai-org/plugin-marketplace`)

Catalog: https://github.com/xai-org/plugin-marketplace  
Announce: https://x.ai/news/grok-plugin-marketplace

### Preconditions

- [ ] Public GitHub repo containing this plugin (skills + `.mcp.json`)
- [ ] Known commit SHA to pin
- [ ] MCP reachable at `https://allstackd.com/api/mcp`

### Steps

1. Fork https://github.com/xai-org/plugin-marketplace
2. Add a third-party entry under `external_plugins/` **or** reference the remote source in `.grok-plugin/marketplace.json` (preferred: remote source pinned to SHA — follow their README).
3. Do **not** hand-edit `.grok-plugin/plugin-index.json`; run their generate/validate script after editing the catalog.
4. Open a pull request with title: `Add AllStackd SES control plane plugin`
5. PR body (paste):

```markdown
## Summary
Adds AllStackd — Amazon SES portfolio control plane (remote MCP + skill).

- Remote MCP: `https://allstackd.com/api/mcp`
- Auth: Bearer API key (`ALLSTACKD_API_KEY`); OAuth when available
- Positioning: ops layer on customer SES, not a managed ESP

## Source
- Repo: https://github.com/allstackd/allstackd-plugin
- Pin SHA: <COMMIT_SHA>

## Test plan
- [ ] `grok plugin marketplace list` shows allstackd after merge
- [ ] `grok plugin install allstackd --trust` (or catalog name) loads skill + MCP
- [ ] With API key set, `list_projects` succeeds against production
```

6. After merge, verify inside Grok Build: `/marketplace` → install AllStackd.

### Manual MCP fallback (no catalog wait)

```bash
grok mcp add --transport http allstackd https://allstackd.com/api/mcp
grok mcp doctor allstackd
```

Set the Authorization header / env per https://docs.x.ai/build/features/mcp-servers

---

## B. Google Antigravity CLI

Docs: https://antigravity.google/docs/cli/plugins/  
IDE plugins overview: https://www.antigravity.google/docs/ide/plugins/

There is **no** documented self-serve third-party marketplace. Bundled “Build with Google” plugins are partnership-only. Ship install-from-path.

### Install

From this monorepo:

```bash
agy plugin install "$(git rev-parse --show-toplevel)/distribution/allstackd-plugin/antigravity"
```

Or global copy:

```bash
mkdir -p ~/.gemini/antigravity-cli/plugins
cp -R distribution/allstackd-plugin/antigravity ~/.gemini/antigravity-cli/plugins/allstackd
```

Workspace alternative: `.agents/plugins/allstackd/` (or `_agents/plugins/`).

### Contents of `antigravity/`

- `plugin.json` — required name + description
- `.mcp.json` / `mcp.json` — remote AllStackd MCP
- `skills/allstackd/SKILL.md` — same skill as Cursor/Grok

### Do not

- Publish an Open VSX “editor extension” for AllStackd (wrong product shape)
- Wait on Google partnership before documenting CLI install

### Revisit when

Google opens a curated third-party plugin catalog or accepts partnership submissions for SES/devtools.

---

## C. Low-cost MCP registries (one sitting after production)

Same description from `listing.md`:

- [ ] Official MCP registry (when publish flow is available for remote HTTP servers)
- [ ] Glama — https://glama.ai/mcp/servers
- [ ] mcp.so — submit form in nav

These improve discovery; they are not Studio revenue channels.
