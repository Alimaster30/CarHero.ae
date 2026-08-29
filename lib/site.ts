/**
 * Single source of truth for every string, number and image on the homepage.
 * Content is CarHero (Dubai, UAE); the layout it feeds is the Carify Pro system.
 */

export const site = {
  name: "CarHero",
  nameAccent: "AE",
  tagline: "Saving the day!",
  hotlinePretty: "058-58-1-HERO",
  hotlineDigits: "058-581-4376",
  hotlineHref: "tel:+971585814376",
  whatsappHref: "https://wa.me/971585814376",
  email: "info@carhero.ae",
  serviceArea: "Dubai & Northern Emirates, UAE",
  hours: "Daily 8:00 AM - 10:00 PM",
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#why-us" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  heading: ["Roadside Car Help", "Anywhere In Dubai"],
  body: "Tyres, batteries, mobile servicing and Pre-RTA testing brought to you - licensed by the DED and RTA, with no apps, no sign-ups and no hidden charges.",
  stats: [
    { value: 1, suffix: " hr", label: "Average Response", tone: "brand" as const },
    { value: 12000, suffix: "+", label: "Drivers Rescued", tone: "navy" as const },
  ],
  image: "/images/hero/workshop.jpg",
};

export const infoBar = {
  location: { label: "Service Area", value: "Dubai & Northern Emirates" },
  hours: { label: "Hours", value: "Daily 8:00 AM - 10:00 PM" },
};

export const brands = [
  { name: "Michelin", src: "/images/brands/michelin.png" },
  { name: "Goodyear", src: "/images/brands/goodyear.png" },
  { name: "Bridgestone", src: "/images/brands/bridgestone.png" },
  { name: "Pirelli", src: "/images/brands/pirelli.png" },
  { name: "Continental", src: "/images/brands/continental.jpg" },
  { name: "Firestone", src: "/images/brands/firestone.png" },
  { name: "BFGoodrich", src: "/images/brands/bfgoodrich.png" },
  { name: "Falken", src: "/images/brands/falken.png" },
];

export const services = [
  {
    icon: "tyre" as const,
    name: "Tyre Replacement",
    body: "Punctures, blowouts and worn treads fixed at the roadside or at home, with premium brands fitted and balanced on the spot.",
    image: "/images/services/tyre-replacement.jpg",
  },
  {
    icon: "battery" as const,
    name: "Vehicle Battery",
    body: "Jump starts and same-visit battery replacement, tested before and after fitting so you are not stranded twice.",
    image: "/images/services/vehicle-battery.jpg",
  },
  {
    icon: "wrench" as const,
    name: "Mobile Car Service",
    body: "Oil, filters and routine maintenance carried out in your parking bay while you carry on with your day.",
    image: "/images/services/oil-change.jpg",
  },
  {
    icon: "clipboard" as const,
    name: "Pre-RTA Test",
    body: "A full pre-inspection check so your vehicle passes RTA testing first time, with faults reported honestly.",
    image: "/images/services/pre-rta-inspection.jpg",
  },
];

export const certificates = {
  heading: "Licensed. Legit. Trusted.",
  body: "Avoid unlicensed roadside services. CarHero is fully licensed so every job is handled professionally and legally.",
  image: "/images/services/pre-rta-test.jpg",
  inset: "/images/services/battery.jpg",
  items: [
    {
      icon: "badge" as const,
      eyebrow: "Department of Economy & Tourism",
      title: "DED Licensed",
      body: "A fully registered Dubai trade licence, not an unlicensed roadside operator.",
    },
    {
      icon: "star" as const,
      eyebrow: "Roads & Transport Authority",
      title: "RTA Approved",
      body: "Approved to work on UAE roads, so every recovery and repair is done legally.",
    },
    {
      icon: "shield" as const,
      eyebrow: "Workmanship Warranty",
      title: "Warranty Backed",
      body: "Fair pricing, quality parts and warranty-backed work on every job we complete.",
    },
  ],
};

export const process = [
  {
    icon: "phone" as const,
    title: "Call The Hotline",
    body: "One easy-to-remember number - 058-58-1-HERO. No apps to download, no account to create.",
  },
  {
    icon: "pin" as const,
    title: "Share Your Location",
    body: "Tell us where you are and what the car is doing. We quote the price before anyone is dispatched.",
  },
  {
    icon: "wrench" as const,
    title: "A Hero Is Dispatched",
    body: "A licensed mechanic reaches you across Dubai, typically within the hour depending on the job.",
  },
  {
    icon: "check" as const,
    title: "Fixed & Back On The Road",
    body: "You pay exactly what you were quoted, by cash, card, bank transfer, Apple Pay, Google Pay or Tabby.",
  },
];

/**
 * ⚠️ SAMPLE COPY - NOT REAL REVIEWS.
 *
 * The names and avatars below are CarHero's actual Google reviewers, but the
 * `quote` text is written placeholder copy so the section reads correctly in
 * design review. Publishing it as-is would attribute words to real customers
 * that they never said. Replace every `quote` with that reviewer's real Google
 * review text before this goes live.
 */
export const testimonials = [
  {
    name: "Kumar",
    role: "Tyre replacement, Al Barsha",
    avatar: "/images/reviews/kumar.png",
    rating: 5,
    quote:
      "SAMPLE - replace with Kumar's real review. Flat tyre on the way to work and they were with me inside the hour. Quoted the price on the phone and that was exactly what I paid.",
  },
  {
    name: "Rohit",
    role: "Battery replacement, Business Bay",
    avatar: "/images/reviews/rohit.png",
    rating: 5,
    quote:
      "SAMPLE - replace with Rohit's real review. Car would not start in the basement car park. They tested the battery first instead of just selling me one, then fitted a new one on the spot.",
  },
  {
    name: "Efren",
    role: "Mobile car service, JVC",
    avatar: "/images/reviews/efren.png",
    rating: 5,
    quote:
      "SAMPLE - replace with Efren's real review. Booked an oil and filter change at my building. No app, no sign-up, just one call and they came to the parking bay.",
  },
  {
    name: "Sajad",
    role: "Pre-RTA inspection, Al Quoz",
    avatar: "/images/reviews/sajad.png",
    rating: 5,
    quote:
      "SAMPLE - replace with Sajad's real review. They checked the car before the RTA test and told me honestly what needed doing. Passed first time.",
  },
  {
    name: "Chahrazed",
    role: "Roadside assistance, Sheikh Zayed Road",
    avatar: "/images/reviews/chahrazed.png",
    rating: 5,
    quote:
      "SAMPLE - replace with Chahrazed's real review. Broke down in traffic and they talked me through where to wait safely until the van arrived. Very reassuring.",
  },
  {
    name: "Anant",
    role: "Tyre repair, Dubai Marina",
    avatar: "/images/reviews/anant.png",
    rating: 5,
    quote:
      "SAMPLE - replace with Anant's real review. Slow puncture repaired at my office car park while I was in a meeting. Fair price and no upselling.",
  },
  {
    name: "Khizar",
    role: "Battery jump start, Deira",
    avatar: "/images/reviews/khizar.png",
    rating: 5,
    quote:
      "SAMPLE - replace with Khizar's real review. Called the hotline late in the evening and someone actually picked up. Back on the road quickly.",
  },
];

export const whyUs = {
  heading: "Why Choose Us",
  body: "CarHero exists because roadside help in Dubai was too often unlicensed, unclear on price and impossible to reach. We fixed all three.",
  image: "/images/hero/roadside-recovery.png",
  inset: "/images/services/mobile-service.jpg",
  features: [
    {
      icon: "bolt" as const,
      title: "Quick Response Across Dubai",
      body: "Flat tyre or empty battery, our team responds fast and gets you moving again, usually within the hour.",
    },
    {
      icon: "tag" as const,
      title: "No Hidden Charges",
      body: "You pay exactly what you are quoted. No tricks, no hidden fees, no surprise charges.",
    },
    {
      icon: "phone" as const,
      title: "No Apps, No Sign-Ups",
      body: "No complicated apps or registration - just straightforward help when you need it urgently.",
    },
    {
      icon: "shield" as const,
      title: "No Planted Faults",
      body: "Only honest work by our skilled, friendly mechanics. We fix what is broken, nothing more.",
    },
  ],
};

/**
 * `height` is the filled fraction of each bar. Keep it at or below ~0.62 so the
 * figure at the top of the card stays on the hatched area, as in the reference.
 */
export const impact = [
  { value: 12000, suffix: "+", label: "Drivers Rescued", height: 0.46 },
  { value: 60, suffix: " min", label: "Average Response", height: 0.58 },
  { value: 7, suffix: "", label: "Emirates Covered", height: 0.7 },
  { value: 98, suffix: "%", label: "Would Call Again", height: 0.82 },
];

export const work = [
  {
    title: "Front wing dent, Sheikh Zayed Road",
    before: "/images/work/job-1-before.jpg",
    after: "/images/work/job-1-after.jpg",
    large: true,
  },
  {
    title: "Rear quarter panel respray, Business Bay",
    before: "/images/work/job-2-before.jpg",
    after: "/images/work/job-2-after.jpg",
    large: true,
  },
  {
    title: "Rear bumper repair, Al Quoz",
    before: "/images/work/job-3-before.jpg",
    after: "/images/work/job-3-after.jpg",
    large: false,
  },
  {
    title: "Front-end collision rebuild, JVC",
    before: "/images/work/job-4-before.jpg",
    after: "/images/work/job-4-after.jpg",
    large: false,
  },
  {
    title: "Bonnet and bumper restoration, Al Khail Road",
    before: "/images/work/job-5-before.jpg",
    after: "/images/work/job-5-after.jpg",
    large: false,
  },
];

export const payments = [
  "Cash",
  "Major cards",
  "Bank transfer",
  "Apple Pay",
  "Google Pay",
  "Tabby",
];

export const faqs = [
  {
    q: "How fast can you reach me?",
    a: "Across Dubai we typically reach you within one hour of your call. The exact time depends on your location, traffic and the work involved - we tell you the honest estimate on the phone before dispatching anyone.",
  },
  {
    q: "What does it cost?",
    a: "You are quoted a price on the call and that is what you pay. No tricks, no hidden fees and no surprise charges added at the end of the job.",
  },
  {
    q: "Do I need to download an app or sign up?",
    a: "No. There is no app and no registration. Call 058-58-1-HERO and speak to a person - that is the whole process.",
  },
  {
    q: "Are you licensed?",
    a: "Yes. CarHero is fully licensed by the DED and the RTA, so every job is handled professionally and legally. Unlicensed roadside operators cannot say the same.",
  },
  {
    q: "Which payment methods do you accept?",
    a: "Cash, all major cards, bank transfer, Apple Pay, Google Pay and now Tabby as well.",
  },
  {
    q: "Do you plant faults to sell extra work?",
    a: "Never. Our mechanics report only what they find, and fix only what you approve. Honest work is the entire reason CarHero exists.",
  },
];

export const footerLinks = {
  company: [
    { label: "About Us", href: "#why-us" },
    { label: "Our Services", href: "#services" },
    { label: "Our Process", href: "#process" },
    { label: "Our Work", href: "#work" },
    { label: "FAQ", href: "#faq" },
  ],
  social: [
    { label: "Facebook", href: "https://facebook.com", icon: "facebook" as const },
    { label: "Instagram", href: "https://instagram.com", icon: "instagram" as const },
    { label: "WhatsApp", href: site.whatsappHref, icon: "whatsapp" as const },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" as const },
  ],
};

/**
 * The reference shows a single featured video, not a carousel.
 * TODO: point `href` at the real YouTube/Instagram URL and replace `views`
 * with the real view count once the clip is published.
 */
export const featuredVideo = {
  title: "Roadside tyre change in under 20 minutes",
  views: 51800,
  thumbnail: "/images/services/tyres.jpg",
  href: "#contact",
};
