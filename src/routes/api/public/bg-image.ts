import { createFileRoute } from "@tanstack/react-router";

/**
 * Long-term-cacheable proxy for the Cloudinary brand background.
 *
 * Cloudinary serves versioned assets with `private, max-age=2592000`, which
 * blocks shared/edge caching. This route re-serves the exact same bytes with
 * `public, max-age=31536000, immutable` so the CDN and browser can hold them
 * for a year. Content negotiation (AVIF/WebP/JPEG) is preserved by forwarding
 * the client's Accept header to Cloudinary's `f_auto` and varying on it.
 */
const CLOUDINARY_ORIGIN = "https://res.cloudinary.com";
const IMAGE_PATH = "/prfxdvsk/image/upload";
const ASSET = "v1787065753/forgeflow.jpg";
const ALLOWED_WIDTHS = new Set([480, 768, 1024, 1254]);

export const Route = createFileRoute("/api/public/bg-image")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const width = Number(url.searchParams.get("w") ?? "1254");
        if (!ALLOWED_WIDTHS.has(width)) {
          return new Response("Unsupported width", { status: 400 });
        }

        const upstream = `${CLOUDINARY_ORIGIN}${IMAGE_PATH}/f_auto,q_auto:eco,c_limit,w_${width}/${ASSET}`;
        const res = await fetch(upstream, {
          headers: {
            Accept: request.headers.get("accept") ?? "image/avif,image/webp,image/*",
          },
        });

        if (!res.ok) {
          return new Response("Upstream image unavailable", { status: 502 });
        }

        return new Response(res.body, {
          status: 200,
          headers: {
            "Content-Type": res.headers.get("content-type") ?? "image/jpeg",
            "Cache-Control": "public, max-age=31536000, s-maxage=31536000, immutable",
            "CDN-Cache-Control": "public, max-age=31536000, immutable",
            Vary: "Accept",
            ...(res.headers.get("etag") ? { ETag: res.headers.get("etag")! } : {}),
          },
        });
      },
    },
  },
});
