import { BRAND_IMAGE } from "@/data/forgeflowData";

/**
 * Single global atmospheric background.
 * Layer order: Image -> Dark overlay -> Blue/cyan ambient -> Content.
 * Fixed, static (no motion), responsive focal point via CSS media query.
 */
export function BackgroundLayer() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-forge-black"
    >
      {/* Slightly oversized container keeps the image centered and covering on all screens. */}
      <div className="absolute -inset-[3%] h-[106%] w-[106%] lg:-inset-[4%] lg:h-[108%] lg:w-[108%]">
        <img
          src={BRAND_IMAGE}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>
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


