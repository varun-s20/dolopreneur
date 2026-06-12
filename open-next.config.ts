import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Default OpenNext → Cloudflare Workers adapter config. Add an incremental cache
// (e.g. R2 / KV) here later if you want ISR/data-cache persistence across deploys.
export default defineCloudflareConfig();
