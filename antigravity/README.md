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

After install, add a Bearer API key in the host MCP settings for `https://allstackd.com/api/mcp` (`Authorization: Bearer as_…` from Dashboard → API keys). Do not commit the key.

**Product:** https://allstackd.com · **MCP:** `https://allstackd.com/api/mcp`
