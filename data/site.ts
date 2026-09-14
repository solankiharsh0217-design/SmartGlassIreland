export const BUSINESS = {
  name: "Smart Glass Ireland Ltd",
  short: "Smart Glass Ireland",
  tagline: "Innovative smart glass technology for modern architectural and display applications.",
  email: "info@smartglassireland.com",
  phoneUK: "+44 7391 650896",
  phoneUKHref: "tel:+447391650896",
  phoneIE: "+353 1 234 5678",
  phoneIEHref: "tel:+35312345678",
  whatsapp: "https://wa.me/447391650896",
  area: "Dublin, Ireland",
  coverage: "Serving Ireland & the United Kingdom",
};

export type Product = {
  slug: string;
  badge: string;
  title: string;
  tagline: string;
  desc: string;
  longDesc: string;
  image: string;
  points: string[];
  specs: { k: string; v: string }[];
};

export const products: Product[] = [
  {
    slug: "switchable-panel",
    badge: "PDLC · PRIVACY",
    title: "Smart Glass Switchable Window Panel",
    tagline: "Laminated Safety Glass with PDLC Film",
    desc: "Transform any space with our intelligent switchable glass panel — control privacy and light instantly with the press of a button.",
    longDesc:
      "All panels are custom-made using a lamination process that encapsulates PDLC film between two or more sheets of glass. Send a minute electrical current through the film and the glass switches from frosted to clear in milliseconds — blocking visibility while keeping natural light. Minimal, seamless design fits any modern architecture, in custom sizes for any project, with professional installation and support.",
    image: "/images/work-01.jpg",
    points: [
      "Instantly switches between transparent and private (opaque) modes",
      "Frosted state blocks visibility but keeps natural light",
      "Energy efficient insulation for comfort and savings",
      "Custom sizes for any architectural project",
    ],
    specs: [
      { k: "Technology:", v: "PDLC laminated safety glass" },
      { k: "Switching:", v: "Transparent ↔ opaque in milliseconds" },
      { k: "Light:", v: "Up to 80% transmittance · daylight kept" },
    ],
  },
  {
    slug: "crystal-clear-display",
    badge: "TRANSPARENT LED",
    title: "LED Crystal Clear Display",
    tagline: "Premium Transparent Display Film",
    desc: "Experience stunning visual clarity with our Crystal Clear Display technology — advanced transparent film with exceptional brightness.",
    longDesc:
      "Unlike conventional LED screens, transparent display technology lets light pass through while delivering vivid, high-resolution imagery — visible even in direct sunlight without compromising transparency. When not displaying content the panel maintains near-full transparency and is virtually invisible, integrating seamlessly into glass facades, windows, shopfronts and entrances. Fully customisable sizes, flexible for curved and irregular surfaces, rated for over 100,000 hours and weather-resistant for outdoor use.",
    image: "/images/work-03.jpg",
    points: [
      "Crystal-clear quality with ultra-high brightness, sunlight-visible",
      "Near-full transparency when idle — virtually invisible",
      "Dynamic shopfront advertising while interiors stay visible",
      "Curved and irregular surfaces supported",
    ],
    specs: [
      { k: "Idle transparency:", v: "Up to 90%" },
      { k: "LED lifetime:", v: "100,000+ hours" },
      { k: "Use:", v: "Indoor + weather-resistant outdoor" },
    ],
  },
  {
    slug: "t-grille",
    badge: "OUTDOOR MESH · 45–60%",
    title: "T-Grille LED Grille Screen",
    tagline: "Architectural Mesh Display System",
    desc: "Cutting-edge T-Grille LED display system for outdoor and architectural applications with 45–60% transparency.",
    longDesc:
      "Built from precision-engineered aluminium grille profiles with embedded LEDs, the lightweight, breathable mesh is ideal for architectural integration. The open-grille design lets wind pass straight through — made for high-rise facades and exposed outdoor environments. Front-access design allows individual module replacement without disassembling the display, and every project gets a bespoke configuration including content strategy.",
    image: "/images/work-05.jpg",
    points: [
      "45–60% transparency, wind-permeable for high-rise facades",
      "Lightweight aluminium grille with embedded LEDs",
      "Front-serviceable modules — no full disassembly",
      "Bespoke configuration including content strategy",
    ],
    specs: [
      { k: "Transparency:", v: "45–60%" },
      { k: "Structure:", v: "Aluminium grille, wind-permeable" },
      { k: "Service:", v: "Front-access modules" },
    ],
  },
];

export const processSteps = [
  {
    n: "STEP 01",
    title: "Site Assessment",
    desc: "Our team assesses your location, measuring the surface area and understanding light, privacy and display goals.",
    meta: "Measure & survey",
  },
  {
    n: "STEP 02",
    title: "Bespoke Design",
    desc: "We design a bespoke configuration tailored to your space — including content strategy for display systems.",
    meta: "Design + content plan",
  },
  {
    n: "STEP 03",
    title: "Certified Installation",
    desc: "Our certified engineers install the system quickly with minimal disruption — then support you from consultation to ongoing care.",
    meta: "Install & aftercare",
  },
];

export const sectors = [
  { title: "Residential", desc: "Bathrooms, partitions and windows with instant privacy.", image: "/images/work-08.jpg" },
  { title: "Commercial", desc: "Meeting rooms and facades that switch on demand.", image: "/images/work-09.jpg" },
  { title: "Healthcare", desc: "Hygienic privacy for wards, clinics and consult rooms.", image: "/images/work-11.jpg" },
  { title: "Hospitality & Retail", desc: "Shopfront advertising and entrances that impress.", image: "/images/work-10.jpg" },
  { title: "Architectural", desc: "Facades, atria and feature glazing at any scale.", image: "/images/work-12.jpg" },
  { title: "Corporate Lobbies", desc: "Brand moments that keep interiors full of light.", image: "/images/work-02.jpg" },
];

export const gallery = [
  { src: "/images/work-01.jpg", cap: "Switchable panel — installation detail" },
  { src: "/images/work-02.jpg", cap: "Commercial glazing application" },
  { src: "/images/work-03.jpg", cap: "Crystal Clear Display surface" },
  { src: "/images/work-04.jpg", cap: "Transparent display close-up" },
  { src: "/images/work-05.jpg", cap: "T-Grille mesh profile" },
  { src: "/images/work-06.jpg", cap: "Grille module detail" },
  { src: "/images/work-07.jpg", cap: "Facade integration" },
  { src: "/images/factory-rolls.jpg", cap: "PDLC film rolls in production" },
];
