import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel redirected the apex to www at the domain level; do it here instead.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "sendprop.com" }],
        destination: "https://www.sendprop.com/:path*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
