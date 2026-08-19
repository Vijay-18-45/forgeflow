import { useEffect, useRef, useState } from "react";

import {
  BRAND_IMAGE_LQIP,
  BRAND_IMAGE_SIZES,
  BRAND_IMAGE_SRC,
  BRAND_IMAGE_SRCSET,
} from "@/data/forgeflowData";

/**
 * Single global atmospheric background.
 * Layer order: LQIP -> Image -> Dark overlay -> Blue/cyan ambient -> Content.
 * Fixed, static (no motion), responsive focal point via CSS media query.
 * Image is served through a long-cache edge route (f_auto/q_auto variants) and
 * fetched with high priority since it is the first paint surface. A 24px
 * inline blurred placeholder paints instantly underneath it. The real image is
 * never hidden behind JS/opacity state so it stays an immediate LCP candidate.
 */
export function BackgroundLayer() {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // A cached image can finish before hydration attaches onLoad.
  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 bg-forge-black">
      <div
        className="absolute inset-0 scale-105 blur-2xl transition-opacity duration-300"
        style={{
          backgroundImage: `url("${BRAND_IMAGE_LQIP}")`,
          backgroundSize: "cover",
          backgroundPosition: "55% center",
          opacity: loaded ? 0 : 1,
        }}
      />
      <img
        ref={imgRef}
        src={BRAND_IMAGE_SRC}
        srcSet={BRAND_IMAGE_SRCSET}
        sizes={BRAND_IMAGE_SIZES}
        alt=""
        width={1254}
        height={1254}
        decoding="async"
        fetchPriority="high"
        onLoad={() => setLoaded(true)}
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
