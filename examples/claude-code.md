# Claude Code

Hosted OAuth (people sign in with their AllStackd account):

```bash
claude mcp add --transport http allstackd https://allstackd.com/mcp
```

Then run `/mcp` in Claude Code and choose **allstackd** to sign in.

For an unattended agent, use an agent API key limited to one inbox (Dashboard → API keys → Agent key):

```bash
claude mcp add --transport http allstackd https://allstackd.com/api/mcp \
  --header "Authorization: Bearer $ALLSTACKD_API_KEY"
```

Try: "List my agent inboxes and summarize new threads." then "Draft a reply to the latest thread in support@ for my approval."

An agent key can draft and request a send. It cannot approve. A person approves in the dashboard.
