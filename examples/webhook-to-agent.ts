/**
 * Receive an AllStackd webhook and wake your agent when a message arrives.
 * Webhooks carry IDs and metadata only, never message bodies. Fetch the body with the API or MCP.
 *
 * Signature: header `allstackd-signature: v1=<hex>` is HMAC-SHA256 over `${allstackd-timestamp}.${rawBody}`
 * using the secret shown once when you created the webhook.
 */
import { createHmac, timingSafeEqual } from "node:crypto";
import { createServer } from "node:http";

const secret = process.env.ALLSTACKD_WEBHOOK_SECRET!;
const MAX_AGE_SECONDS = 300;

function verify(rawBody: string, timestamp: string, signature: string) {
  if (Math.abs(Date.now() / 1000 - Number(timestamp)) > MAX_AGE_SECONDS) return false;
  const expected = Buffer.from(createHmac("sha256", secret).update(`${timestamp}.${rawBody}`).digest("hex"));
  const given = Buffer.from(signature.replace(/^v1=/, ""));
  return expected.length === given.length && timingSafeEqual(expected, given);
}

async function wakeAgent(event: { type: string; data: Record<string, unknown> }) {
  console.log("event", event.type, Object.keys(event.data));
  // Start your agent here, for example by calling its own API with the thread id from event.data.
}

createServer((req, res) => {
  let body = "";
  req.on("data", (chunk) => (body += chunk));
  req.on("end", async () => {
    const ok = verify(body, String(req.headers["allstackd-timestamp"]), String(req.headers["allstackd-signature"]));
    if (!ok) { res.writeHead(401).end(); return; }
    await wakeAgent(JSON.parse(body));
    res.writeHead(204).end();
  });
}).listen(8787);
