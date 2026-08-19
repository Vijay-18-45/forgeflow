/**
 * Minimal, dependency-free Web Vitals reporter focused on LCP.
 *
 * Reports LCP (plus TTFB/FCP/CLS for context) to the console and stores the
 * latest values on `window.__forgeVitals` so background-image optimisations can
 * be verified in the live preview:
 *
 *   window.__forgeVitals            // { lcp: 1240, lcpElement: 'IMG …', … }
 */
export type Vitals = {
  ttfb?: number;
  fcp?: number;
  lcp?: number;
  lcpElement?: string | undefined;
  lcpUrl?: string | undefined;
  cls?: number;
};

declare global {
  interface Window {
    __forgeVitals?: Vitals;
  }
}

const round = (n: number) => Math.round(n * 10) / 10;

export function initWebVitals() {
  if (typeof window === "undefined" || !("PerformanceObserver" in window)) return;
  if (window.__forgeVitals) return; // already initialised

  const vitals: Vitals = {};
  window.__forgeVitals = vitals;

  const log = (metric: string, value: number, extra?: string) => {
    console.info(
      `[vitals] ${metric}: ${round(value)}ms${extra ? ` — ${extra}` : ""}`,
    );
  };

  const nav = performance.getEntriesByType("navigation")[0] as
    | PerformanceNavigationTiming
    | undefined;
  if (nav) {
    vitals.ttfb = round(nav.responseStart);
  }

  const observe = (
    type: string,
    cb: (entries: PerformanceEntryList) => void,
    buffered = true,
  ) => {
    try {
      const po = new PerformanceObserver((list) => cb(list.getEntries()));
      po.observe({ type, buffered } as PerformanceObserverInit);
      return po;
    } catch {
      return undefined;
    }
  };

  observe("paint", (entries) => {
    for (const entry of entries) {
      if (entry.name === "first-contentful-paint") {
        vitals.fcp = round(entry.startTime);
        log("FCP", entry.startTime);
      }
    }
  });

  const lcpObserver = observe("largest-contentful-paint", (entries) => {
    const last = entries[entries.length - 1] as
      | (PerformanceEntry & { element?: Element; url?: string; renderTime?: number })
      | undefined;
    if (!last) return;
    vitals.lcp = round(last.startTime);
    vitals.lcpElement = last.element
      ? `${last.element.tagName}${last.element.className ? `.${String(last.element.className).split(" ")[0]}` : ""}`
      : undefined;
    vitals.lcpUrl = last.url || undefined;
    log("LCP", last.startTime, [vitals.lcpElement, vitals.lcpUrl].filter(Boolean).join(" "));
  });

  observe("layout-shift", (entries) => {
    let cls = vitals.cls ?? 0;
    for (const entry of entries as (PerformanceEntry & {
      value: number;
      hadRecentInput: boolean;
    })[]) {
      if (!entry.hadRecentInput) cls += entry.value;
    }
    vitals.cls = Math.round(cls * 1000) / 1000;
  });

  // LCP is final once the user interacts or the page is hidden.
  const finalize = () => {
    lcpObserver?.takeRecords();
    lcpObserver?.disconnect();
    if (vitals.lcp !== undefined) {
      console.info("[vitals] final", { ...vitals });
    }
  };
  addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") finalize();
  });
  addEventListener("keydown", finalize, { once: true });
  addEventListener("pointerdown", finalize, { once: true });
}
