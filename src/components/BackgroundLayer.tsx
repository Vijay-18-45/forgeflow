import { BRAND_IMAGE, BRAND_IMAGE_SIZES, BRAND_IMAGE_SRCSET } from "@/data/forgeflowData";

/**
 * Single global atmospheric background.
 * Layer order: Image -> Dark overlay -> Blue/cyan ambient -> Content.
 * Fixed, static (no motion), responsive focal point via CSS media query.
 * Image is served through Cloudinary with auto format/quality + width variants
 * and is fetched with high priority since it is the first paint surface.
 */
export function BackgroundLayer() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 bg-forge-black">
      <img
        src={BRAND_IMAGE}
        srcSet={BRAND_IMAGE_SRCSET}
        sizes={BRAND_IMAGE_SIZES}
        alt=""
        width={1254}
        height={1254}
        decoding="async"
        fetchPriority="high"
        className="forge-bg absolute inset-0 h-full w-full object-cover object-[55%_center] lg:object-contain lg:object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.42), rgba(0,0,0,0.55)), radial-gradient(ellipse 90% 60% at 50% 0%, rgba(3,140,244,0.10), transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 80% 90%, rgba(3,196,246,0.06), transparent 70%)",
        }}
      />
    </div>
  );
}
