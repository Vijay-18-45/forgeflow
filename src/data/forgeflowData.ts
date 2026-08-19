const CLOUDINARY_BASE =
  "https://res.cloudinary.com/prfxdvsk/image/upload";
const BRAND_IMAGE_PATH = "v1787065753/forgeflow.jpg";

/** Cloudinary-transformed brand image: auto format (AVIF/WebP), auto quality, width-capped. */
export function brandImageUrl(width: number) {
  return `${CLOUDINARY_BASE}/f_auto,q_auto:good,c_limit,w_${width}/${BRAND_IMAGE_PATH}`;
}

export const BRAND_IMAGE_WIDTHS = [640, 960, 1254];

/**
 * Same bytes as `brandImageUrl`, served through our own edge route so the
 * response carries `public, max-age=31536000, immutable` (Cloudinary marks its
 * versioned assets `private`, which blocks shared/CDN caching).
 */
export function brandImageCachedUrl(width: number) {
  return `/api/public/bg-image?w=${width}`;
}

export const BRAND_IMAGE_SRCSET = BRAND_IMAGE_WIDTHS.map(
  (w) => `${brandImageCachedUrl(w)} ${w}w`,
).join(", ");

/** Inline 24px blurred LQIP placeholder shown until the full image decodes. */
export const BRAND_IMAGE_LQIP =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAlgCWAAD/2wBDABsSFBcUERsXFhceHBsgKEIrKCUlKFE6PTBCYFVlZF9VXVtqeJmBanGQc1tdhbWGkJ6jq62rZ4C8ybqmx5moq6T/2wBDARweHigjKE4rK06kbl1upKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKT/wAARCAAYABgDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEG/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AzYKqIAAAAAD/2Q==";

/** Sizes: mobile covers the viewport, desktop is letterboxed to viewport height. */
export const BRAND_IMAGE_SIZES = "(min-width: 1024px) 100vh, 100vw";

/** Default / social-preview URL (absolute, for crawlers). */
export const BRAND_IMAGE = brandImageUrl(1254);

/** Cached in-app source for the background <img>. */
export const BRAND_IMAGE_SRC = brandImageCachedUrl(1254);


export const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Verticals", href: "#verticals" },
  { label: "Approach", href: "#approach" },
  { label: "About", href: "#about" },
];

export const processSteps = [
  "Understand",
  "Structure",
  "Intelligence",
  "Integrate",
  "Improve",
];

export const principles = [
  {
    id: "01",
    title: "Understand",
    body: "We learn the workflow first — the language, the handoffs, the decisions people actually make each day.",
  },
  {
    id: "02",
    title: "Structure",
    body: "We turn scattered process into structured systems: clean data models, clear states, predictable steps.",
  },
  {
    id: "03",
    title: "Intelligence",
    body: "Only then do we add intelligence, placed exactly where it removes work or improves a decision.",
  },
];

export const verticals = [
  {
    name: "Education",
    product: "ForgeFlow EDU",
    description: "Intelligent operating software for study-abroad consultancies.",
    status: "BUILDING" as const,
  },
  { name: "Healthcare", product: null, description: "Clinical and administrative workflows.", status: "EXPLORING" as const },
  { name: "Semiconductor", product: null, description: "Design, fabrication and supply coordination.", status: "EXPLORING" as const },
  { name: "Financial Services", product: null, description: "Compliance-heavy operational processes.", status: "EXPLORING" as const },
  { name: "Logistics", product: null, description: "Movement, exceptions and documentation.", status: "EXPLORING" as const },
];

export const eduWorkflow = [
  { label: "LEAD", tone: "active" as const },
  { label: "STUDENT PROFILE", tone: "active" as const },
  { label: "ELIGIBILITY", tone: "intelligence" as const },
  { label: "UNIVERSITY MATCHING", tone: "highlight" as const },
  { label: "DOCUMENTS", tone: "inactive" as const },
  { label: "APPLICATION", tone: "inactive" as const },
  { label: "FOLLOW-UP", tone: "inactive" as const },
];

export const approachSteps = [
  { id: "01", title: "Find the workflow", body: "Map how the work moves today, end to end." },
  { id: "02", title: "Find the bottleneck", body: "Locate where time, clarity or information is lost." },
  { id: "03", title: "Design the system", body: "Build the structure the workflow deserves." },
  { id: "04", title: "Add intelligence", body: "Automate judgement-light work, assist the rest." },
  { id: "05", title: "Measure the outcome", body: "Track the operational number that mattered." },
];

export const approachChain = ["Problem", "Workflow", "Product", "Intelligence", "Outcome"];

export const genericPath = ["Many industries", "Generic workflows", "Generic features"];
export const forgePath = [
  "One industry",
  "Deep workflow knowledge",
  "Industry-specific product",
  "Better outcomes",
];

export const futureVerticals = [
  "Education",
  "Healthcare",
  "Semiconductors",
  "Financial Services",
  "Logistics",
];

export const team = [
  { role: "Founder", focus: "Product & AI" },
  { role: "CTO", focus: "Full-Stack Engineering" },
  { role: "Growth", focus: "Marketing & Distribution" },
];

export const studentProfile = [
  { label: "Academic Score", value: "82%" },
  { label: "English Score", value: "7.5" },
  { label: "Budget", value: "₹25L" },
  { label: "Preferred Country", value: "UK" },
];

export const universityMatches = [
  { name: "University A", score: 94 },
  { name: "University B", score: 89 },
  { name: "University C", score: 84 },
];

export const documentStatus = [
  { name: "Passport", state: "done" as const },
  { name: "Transcript", state: "done" as const },
  { name: "Financial Proof", state: "warn" as const },
];

export const dashboardMetrics = [
  { label: "Students", value: "1,284" },
  { label: "Applications", value: "426" },
  { label: "Documents", value: "3,891" },
  { label: "Follow-ups", value: "127" },
];

export const dashboardStudents = [
  { name: "Student #1041", country: "UK", stage: "University Matching", score: "82%" },
  { name: "Student #1042", country: "Canada", stage: "Documents", score: "76%" },
  { name: "Student #1043", country: "Germany", stage: "Eligibility", score: "88%" },
  { name: "Student #1044", country: "Australia", stage: "Follow-up", score: "71%" },
];

export const dashboardApplications = [
  { id: "APP-2211", university: "University A", programme: "MSc Data Science", state: "Submitted" },
  { id: "APP-2212", university: "University B", programme: "MSc Computing", state: "In review" },
  { id: "APP-2213", university: "University C", programme: "MA Management", state: "Draft" },
];

export const dashboardDocuments = [
  { name: "Passport", owner: "Student #1041", state: "Verified" },
  { name: "Transcript", owner: "Student #1041", state: "Verified" },
  { name: "Financial Proof", owner: "Student #1042", state: "Missing" },
  { name: "SOP Draft", owner: "Student #1043", state: "In review" },
];

export const dashboardFollowUps = [
  { task: "Counsellor review call", due: "Today", owner: "Counsellor 2" },
  { task: "Request financial proof", due: "Tomorrow", owner: "Ops" },
  { task: "Visa timeline check", due: "In 3 days", owner: "Counsellor 1" },
];
