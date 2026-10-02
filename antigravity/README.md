# AllStackd for Antigravity CLI

There is no self-serve Antigravity marketplace yet. Install from this public plugin repo.

## Install

```bash
git clone https://github.com/kondasviktor/allstackd-plugin.git
agy plugin install "$(pwd)/allstackd-plugin/antigravity"
```

Or copy into the global plugins path:

```bash
git clone https://github.com/kondasviktor/allstackd-plugin.git
mkdir -p ~/.gemini/antigravity-cli/plugins
cp -R allstackd-plugin/antigravity ~/.gemini/antigravity-cli/plugins/allstackd
```

Set `ALLSTACKD_API_KEY` (Dashboard → API keys) before using MCP tools.

**Product:** https://allstackd.com · **MCP:** `https://allstackd.com/api/mcp`
