export const STUDIO = {
  name: "Babell Group",
  shortName: "BABELL",
  subName: "GROUP · DESIGN ATELIER",
  tagline: "Design. Build. Deliver.",
  url: "https://babellgroup.com",
  whatsappNumber: "919845325913",
  phonePrimary: "+91 98453 25913",
  phonePrimaryHref: "tel:+919845325913",
  phoneSecondary: "+91 98453 25913",
  phoneSecondaryHref: "tel:+919845325913",
  email: "concierge@babellgroup.com",
  hours: "10:00 AM – 7:00 PM",
  instagram: "https://babellgroup.com",
  facebook: "https://babellgroup.com",
  areasServed: ["Bengaluru", "Mumbai", "Hyderabad", "Chennai", "Delhi NCR", "Mysuru"],
  studios: [
    {
      name: "Bengaluru Flagship Atelier",
      address: "Level 3, Maison Babell, 48 Lavelle Road, Shanthala Nagar, Bengaluru – 560001",
      mapsUrl: "https://babellgroup.com",
      embedUrl:
        "https://maps.google.com/maps?q=Lavelle%20Road%2C%20Bengaluru&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },
    {
      name: "Mumbai Design Studio",
      address: "Suite 402, Heritage House, Kala Ghoda, Fort, Mumbai – 400001",
      mapsUrl: "https://babellgroup.com",
      embedUrl:
        "https://maps.google.com/maps?q=Kala%20Ghoda%2C%20Mumbai&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },
  ],
} as const;

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${STUDIO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const NAV_ITEMS = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About", href: "/about" },
  { id: "services", label: "Services", href: "/services" },
  { id: "portfolio", label: "Portfolio", href: "/portfolio" },
  { id: "blog", label: "Blog", href: "/blog" },
  { id: "contact", label: "Contact", href: "/contact" },
] as const;

export const TRUST_METRICS = [
  { num: "12+", label: "Years Atelier Heritage" },
  { num: "100+", label: "Residential Projects" },
  { num: "40+", label: "Commercial Projects" },
  { num: "150+", label: "Private Clients" },
  { num: "250+", label: "3D Designs Delivered" },
  { num: "98%", label: "Client Satisfaction" },
] as const;

export const PROBLEMS = [
  {
    num: "01",
    icon: "🧭",
    title: "Confusing design process",
    problem:
      "Planning your dream space feels overwhelming — layouts, material selection, budgeting and confident decisions all at once.",
    answer:
      "We guide you stage by stage. Optimised 2D layouts, mood boards and photorealistic 3D walkthroughs let you see the space before a single decision is final.",
  },
  {
    num: "02",
    icon: "📉",
    title: "Delays and budget overruns",
    problem:
      "Without proper planning and project management, timelines slip, expenses climb and the outcome falls short of expectations.",
    answer:
      "A transparent, itemised estimate is prepared after site measurement and material selection — then managed by our own execution team with site supervision throughout.",
  },
  {
    num: "03",
    icon: "📐",
    title: "Poor space utilisation",
    problem:
      "Whether a compact home or a commercial space, inefficient layouts reduce comfort, storage, functionality and productivity.",
    answer:
      "Space planning is a service in its own right here. We analyse movement, storage and usability to create layouts that make the space work harder.",
  },
  {
    num: "04",
    icon: "🎨",
    title: "Generic, impersonal design",
    problem:
      "Off-the-shelf designs fail to reflect your style or your brand. Every home and business is different.",
    answer:
      "We create custom interiors aligned to your lifestyle, functional needs and brand identity — maximising both aesthetics and usability.",
  },
] as const;

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProcessPhase {
  id: string;
  name: string;
  countLabel: string;
  icon: "compass" | "pen" | "wrench" | "key";
  steps: ProcessStep[];
}

export const PROCESS_PHASES: ProcessPhase[] = [
  {
    id: "ph-a",
    name: "Discovery",
    countLabel: "2 stages",
    icon: "compass",
    steps: [
      {
        num: "01",
        title: "Discovery Consultation",
        desc: "We begin by understanding your vision, lifestyle, business needs, budget and project goals through a detailed consultation.",
      },
      {
        num: "02",
        title: "Site Visit & Space Assessment",
        desc: "Our team visits the site to take measurements, assess the space and understand technical requirements before planning begins.",
      },
    ],
  },
  {
    id: "ph-b",
    name: "Design",
    countLabel: "3 stages",
    icon: "pen",
    steps: [
      {
        num: "03",
        title: "Design Concept & Space Planning",
        desc: "We create optimised layouts, mood boards and design concepts that maximise functionality, aesthetics and space utilisation.",
      },
      {
        num: "04",
        title: "3D Visualization & Design Approval",
        desc: "Experience your future space through realistic 3D renders and walkthroughs. We refine the design until you are completely satisfied.",
      },
      {
        num: "05",
        title: "Material Selection & Cost Estimation",
        desc: "Select finishes, colours, furniture, lighting and materials while receiving a transparent project estimate tailored to your budget.",
      },
    ],
  },
  {
    id: "ph-c",
    name: "Execution",
    countLabel: "2 stages",
    icon: "wrench",
    steps: [
      {
        num: "06",
        title: "Execution & Project Management",
        desc: "Our experienced team executes every detail with precision while maintaining quality and providing regular progress updates.",
      },
      {
        num: "07",
        title: "Quality Inspection & Final Styling",
        desc: "Every element is carefully inspected, finished and styled to ensure it meets our quality standards before handover.",
      },
    ],
  },
  {
    id: "ph-d",
    name: "Handover",
    countLabel: "1 stage",
    icon: "key",
    steps: [
      {
        num: "08",
        title: "Project Handover & After-Sales Support",
        desc: "We deliver your completed space, conduct a walkthrough, and remain available for post-completion assistance and support.",
      },
    ],
  },
];

export const QUIZ_STEPS = [
  {
    label: "Question 1 of 3",
    question: "When you imagine your dream home, what matters to you the most?",
    progress: "33%",
    options: [
      { key: "aesthetic", capture: "score" as const, emoji: "✨", text: "It should look beautiful and impressive" },
      { key: "comfort", capture: "score" as const, emoji: "🛋️", text: "It should feel warm and comfortable" },
      { key: "storage", capture: "score" as const, emoji: "📦", text: "Everything should have its own place" },
      { key: "calm", capture: "score" as const, emoji: "🌿", text: "It should feel peaceful and relaxing" },
    ],
  },
  {
    label: "Question 2 of 3",
    question: "What is the ONE thing you wish your home had more of?",
    progress: "67%",
    options: [
      { key: "storage", capture: "score" as const, emoji: "📦", text: "Storage" },
      { key: "calm", capture: "score" as const, emoji: "🌬️", text: "Open space" },
      { key: "aesthetic", capture: "score" as const, emoji: "✨", text: "Beautiful design" },
      { key: "comfort", capture: "score" as const, emoji: "🛋️", text: "Comfort" },
    ],
  },
  {
    label: "Question 3 of 3",
    question: "Which room would you be most excited to see transformed?",
    progress: "100%",
    options: [
      { key: "kitchen", capture: "room" as const, emoji: "🍳", text: "Kitchen" },
      { key: "living", capture: "room" as const, emoji: "🛋️", text: "Living room" },
      { key: "bedroom", capture: "room" as const, emoji: "🛏️", text: "Bedroom" },
      { key: "whole-home", capture: "room" as const, emoji: "🏠", text: "Entire home" },
    ],
  },
] as const;

export const QUIZ_PROFILES = {
  aesthetic: {
    emoji: "✨",
    title: "Design-led",
    lead: "You want a home that makes an impression.",
    body: "We would start with the elements that carry the most visual weight — and show you all of it in 3D before anything is built.",
    bullets: [
      "3D design & visualisation",
      "Decorative wall panelling",
      "False ceiling design",
      "Lighting & colour planning",
    ],
  },
  comfort: {
    emoji: "🛋️",
    title: "Comfort-led",
    lead: "You want a home that feels good to live in.",
    body: "We would focus on how the space is actually used day to day — seating, flow and lighting that suit the way you live.",
    bullets: [
      "Living & family lounge design",
      "Custom furniture design",
      "Lighting design",
      "Furniture placement & flow",
    ],
  },
  storage: {
    emoji: "📦",
    title: "Storage-led",
    lead: "You want everything to have its own place.",
    body: "We would plan storage into the design from the start rather than adding it afterwards, so nothing has to sit out.",
    bullets: [
      "Modular kitchen design",
      "Wardrobe design",
      "Custom storage solutions",
      "Crockery, shoe & pooja units",
    ],
  },
  calm: {
    emoji: "🌿",
    title: "Space-led",
    lead: "You want a home that feels open and calm.",
    body: "We would begin with the layout itself — how you move through the space — before choosing a single finish.",
    bullets: [
      "Space planning & layout design",
      "2D working drawings",
      "Space optimisation",
      "Lighting & colour planning",
    ],
  },
} as const;

export type PackageId = "1bhk" | "2bhk" | "3bhk" | "4bhk";

export interface PackageSpec {
  id: PackageId;
  tabLabel: string;
  badge?: string;
  title: string;
  subtitle: string;
  price: string;
  warranty: string;
  whatsappMsg: string;
  groups: {
    title: string;
    items: { text: string; highlight?: string }[];
  }[];
}

export const PACKAGES: PackageSpec[] = [
  {
    id: "1bhk",
    tabLabel: "1 BHK",
    title: "1 BHK",
    subtitle: "Compact homes, thoughtfully planned",
    price: "₹5 Lakhs",
    warranty: "Warranty Up to 10 Years*",
    whatsappMsg: "Hi! I'd like to know more about the Babell Group 1 BHK interior package.",
    groups: [
      {
        title: "Design & planning",
        items: [
          { text: "Interior design consultation" },
          { text: "2D space planning" },
          { text: "3D design & visualisation" },
        ],
      },
      {
        title: "Kitchen & storage",
        items: [
          { text: "Modular kitchen" },
          { text: "Bedroom wardrobes", highlight: "1" },
        ],
      },
      {
        title: "Living areas",
        items: [{ text: "TV unit" }],
      },
      {
        title: "Finishes",
        items: [
          { text: "False ceiling" },
          { text: "Lighting design", highlight: "Basic" },
          { text: "Premium hardware & accessories" },
        ],
      },
      {
        title: "Delivery",
        items: [{ text: "Professional installation" }, { text: "Project management" }],
      },
    ],
  },
  {
    id: "2bhk",
    tabLabel: "2 BHK",
    badge: "Most requested",
    title: "2 BHK",
    subtitle: "Our most requested home size",
    price: "₹7 Lakhs",
    warranty: "Warranty Up to 10 Years*",
    whatsappMsg: "Hi! I'd like to know more about the Babell Group 2 BHK interior package.",
    groups: [
      {
        title: "Design & planning",
        items: [
          { text: "Interior design consultation" },
          { text: "2D space planning" },
          { text: "3D design & visualisation" },
        ],
      },
      {
        title: "Kitchen & storage",
        items: [
          { text: "Modular kitchen" },
          { text: "Bedroom wardrobes", highlight: "2" },
          { text: "Shoe rack" },
        ],
      },
      {
        title: "Living areas",
        items: [
          { text: "TV unit" },
          { text: "Pooja unit", highlight: "Optional" },
        ],
      },
      {
        title: "Finishes",
        items: [
          { text: "False ceiling" },
          { text: "Lighting design" },
          { text: "Premium hardware & accessories" },
        ],
      },
      {
        title: "Delivery",
        items: [{ text: "Project management" }],
      },
    ],
  },
  {
    id: "3bhk",
    tabLabel: "3 BHK",
    title: "3 BHK",
    subtitle: "Complete family home interiors",
    price: "₹10 Lakhs",
    warranty: "Warranty Up to 10 Years*",
    whatsappMsg: "Hi! I'd like to know more about the Babell Group 3 BHK interior package.",
    groups: [
      {
        title: "Design & planning",
        items: [
          { text: "Interior design consultation" },
          { text: "2D space planning" },
          { text: "3D design & visualisation" },
        ],
      },
      {
        title: "Kitchen & storage",
        items: [
          { text: "Modular kitchen" },
          { text: "Bedroom wardrobes", highlight: "3" },
          { text: "Crockery unit" },
          { text: "Custom storage solutions" },
        ],
      },
      {
        title: "Living areas",
        items: [{ text: "TV unit" }, { text: "Pooja unit" }],
      },
      {
        title: "Finishes",
        items: [
          { text: "False ceiling" },
          { text: "Decorative wall panelling" },
          { text: "Lighting design" },
        ],
      },
      {
        title: "Delivery",
        items: [{ text: "Professional installation" }, { text: "Project management" }],
      },
    ],
  },
  {
    id: "4bhk",
    tabLabel: "4 BHK / Villa",
    title: "4 BHK / Villa",
    subtitle: "Bespoke, top to bottom",
    price: "₹16 Lakhs",
    warranty: "Warranty Up to 10 Years*",
    whatsappMsg: "Hi! I'd like to know more about the Babell Group 4 BHK / Villa interior package.",
    groups: [
      {
        title: "Design & planning",
        items: [
          { text: "Interior design consultation" },
          { text: "2D space planning" },
          { text: "3D design & visualisation" },
        ],
      },
      {
        title: "Kitchen & storage",
        items: [
          { text: "Modular kitchen" },
          { text: "Bedroom wardrobes", highlight: "All" },
          { text: "Walk-in wardrobe", highlight: "If applicable" },
          { text: "Custom furniture solutions" },
        ],
      },
      {
        title: "Living areas",
        items: [
          { text: "TV unit" },
          { text: "Living & family lounge" },
          { text: "Bar unit", highlight: "Optional" },
          { text: "Home office", highlight: "Optional" },
        ],
      },
      {
        title: "Finishes",
        items: [
          { text: "False ceiling" },
          { text: "Decorative wall panelling" },
          { text: "Premium hardware & accessories" },
        ],
      },
      {
        title: "Delivery",
        items: [{ text: "Project management", highlight: "End-to-end" }],
      },
    ],
  },
];

export const TESTIMONIALS = [
  {
    stars: 5,
    quote:
      "Babell Group transformed our 2 BHK villa with outstanding residential interior design, smart space planning and elegant finishes. Their attention to detail and professional approach made our dream home a reality.",
    initial: "R",
    name: "Mr. Rajesh",
    project: "Zion Hills – 2 BHK Villa",
  },
  {
    stars: 4.5,
    quote:
      "The Babell Group atelier created a beautiful 1 BHK interior design that maximized every inch of space. Their 3D visualization, material suggestions and functional layouts helped us make the right decisions with confidence.",
    initial: "P",
    name: "Mr. Prakash",
    project: "1 BHK Flat, Chennai",
  },
  {
    stars: 5,
    quote:
      "We were impressed with the team's residential interior design ideas and customized solutions. Every room was thoughtfully planned to combine comfort, functionality and modern aesthetics.",
    initial: "M",
    name: "Mr. Manu",
    project: "3 BHK Residential House, Rajajinagar",
  },
  {
    stars: 4.5,
    quote:
      "The 3D interior designs gave us a clear vision before execution. From space planning to colour selection, the entire process was smooth, professional and well managed.",
    initial: "V",
    name: "Mr. Vivek",
    project: "2 BHK Residential Flat, Bengaluru",
  },
  {
    stars: 5,
    quote:
      "Babell Group delivered beautiful home interior designs with practical layouts and premium finishes. Their dedication to quality and customer satisfaction truly stood out.",
    initial: "R",
    name: "Mr. Rakesh",
    project: "2 BHK Residential Residence",
  },
  {
    stars: 4,
    quote:
      "The team's expertise in residential interior design and modular furniture planning helped us create a stylish and highly functional home. We are extremely happy with the outcome.",
    initial: "R",
    name: "Mr. Ravi",
    project: "2 BHK Bespoke Residence",
  },
  {
    stars: 5,
    quote:
      "Their innovative approach to interior design, creative concepts and professional presentation showcased their expertise in creating modern residential and commercial spaces.",
    initial: "D",
    name: "Mr. Dharan",
    project: "Interior Design Pavilion, Bengaluru",
  },
  {
    stars: 4.5,
    quote:
      "Babell Group consistently delivered outstanding exterior elevation designs with excellent architectural detailing. Their creativity and technical expertise added great value to every project.",
    initial: "A",
    name: "Mr. Abrar",
    project: "Civic & Architectural Elevation Commissions, Bengaluru",
  },
  {
    stars: 5,
    quote:
      "The team's commercial interior design solutions perfectly reflected our brand identity while creating functional and attractive customer spaces. Their planning and creative concepts exceeded our expectations.",
    initial: "L",
    name: "Mrs. Laxmi",
    project: "Commercial Hospitality & Café Commissions",
  },
  {
    stars: 4,
    quote:
      "Babell Group has been a reliable design partner for multiple auditorium interior design projects across India. Their innovative ideas, detailed planning and commitment to quality make them a trusted atelier.",
    initial: "U",
    name: "Mr. Umashakar",
    project: "Auditorium Design Commissions",
  },
  {
    stars: 5,
    quote:
      "From home interior design to exterior elevation design, every detail was handled professionally. The final result beautifully matched our vision and lifestyle.",
    initial: "S",
    name: "Ms. Shamitha",
    project: "Residential Interiors & Exterior Designs",
  },
  {
    stars: 4.5,
    quote:
      "Babell Group delivered creative residential and commercial interior design solutions that balanced aesthetics, functionality and efficient space utilization. Their professionalism made the entire experience seamless.",
    initial: "J",
    name: "Mr. Jayakumar",
    project: "Residential & Commercial Interior Design",
  },
  {
    stars: 4.5,
    quote:
      "The team's expertise in educational interior design and residential exterior design resulted in practical, visually appealing spaces. Their design quality and attention to detail were exceptional.",
    initial: "S",
    name: "Mr. Sachin",
    project: "Institutional Interiors & Residential Exteriors",
  },
  {
    stars: 5,
    quote:
      "The museum interior design was thoughtfully planned with innovative concepts, functional layouts and excellent detailing. Their ability to combine creativity with practicality was truly impressive.",
    initial: "B",
    name: "Mr. Bharath",
    project: "Institutional Museum Exhibition Design",
  },
  {
    stars: 5,
    quote:
      "The residential exterior design transformed the overall appearance of our home. The modern elevation and thoughtful architectural detailing exceeded our expectations.",
    initial: "S",
    name: "Mr. Sunil",
    project: "Private Villa — Residential Exterior Design",
  },
  {
    stars: 4.5,
    quote:
      "Babell Group created a modern podcast studio interior design that perfectly balanced aesthetics, acoustics and functionality. Their planning and execution support were outstanding.",
    initial: "A",
    name: "Mr. Arun",
    project: "AS Groups & Construction – Podcast Studio Interior Design",
  },
] as const;

export const FAQS = [
  {
    q: "How much does home interior design cost?",
    a: "The cost of home interiors depends on factors such as carpet area, design requirements, material selection, customization and the scope of work. At Babell Group, we provide transparent quotations tailored to your requirements and budget.",
  },
  {
    q: "How long does an interior design project take?",
    a: "Project timelines vary based on the size and complexity of the project. Most residential interior projects are completed within 6–12 weeks after design approval and material finalization.",
  },
  {
    q: "Do you provide both design and execution services?",
    a: "Yes. We offer complete interior design and execution solutions, including concept design, 2D layouts, 3D visualization, material selection, project management and final execution.",
  },
  {
    q: "Which areas do you serve?",
    a: "We undertake residential and commercial interior projects across Bengaluru, Mumbai, Hyderabad, Chennai, Delhi NCR and surrounding regions. We also accept select bespoke commissions across India.",
  },
  {
    q: "Do you create 3D designs before execution?",
    a: "Absolutely. We provide realistic 3D visualizations and walkthroughs so you can visualize your space and make informed decisions before execution begins.",
  },
  {
    q: "Can I customize the design according to my budget?",
    a: "Yes. Every project is customized based on your budget, lifestyle, space requirements and preferred materials while ensuring quality and functionality.",
  },
  {
    q: "What materials do you use for interior projects?",
    a: "We use architectural-grade plywood, bespoke laminates, natural veneers, acrylic finishes, stone surfaces, and precision European hardware tailored to your selected package and preferences.",
  },
  {
    q: "Do you undertake commercial interior projects?",
    a: "Yes. We design and execute offices, retail flagships, cafés, restaurants, clinics, wellness spas, showrooms, educational spaces and other commercial interiors.",
  },
  {
    q: "Is there any warranty on your interior work?",
    a: "Yes. We provide warranty on selected materials and hardware as per the manufacturer's warranty terms and project specifications.",
  },
  {
    q: "How do I get started with my interior project?",
    a: "Simply contact our concierge to schedule a private consultation. Our team will understand your requirements, visit the site if required, discuss your ideas and provide a customized design proposal and quotation.",
  },
  {
    q: "Why should I hire an interior designer?",
    a: "An interior designer helps you optimize space, select the right materials, avoid costly mistakes, manage your budget efficiently and create a functional, aesthetically pleasing space tailored to your lifestyle or business.",
  },
  {
    q: "Do you handle renovations and remodeling projects?",
    a: "Yes. We undertake complete home renovations, apartment makeovers, office renovations, commercial remodeling, kitchen upgrades and exterior design projects.",
  },
  {
    q: "Can I choose my own materials and finishes?",
    a: "Yes. We guide you through material, colour and finish selection while giving you complete flexibility to choose options that suit your style and budget.",
  },
  {
    q: "Do you offer modular kitchen and wardrobe design?",
    a: "Yes. We design and install customized modular kitchens, wardrobes, TV units, crockery units and other storage solutions that maximize functionality and aesthetics.",
  },
  {
    q: "How can I request a quotation?",
    a: "You can contact us by phone, WhatsApp or through our website enquiry form. After understanding your requirements, we will provide a detailed and transparent quotation tailored to your project.",
  },
] as const;

export const PORTFOLIO_CARDS = [
  {
    slug: "zion-hills-villa",
    category: "residential" as const,
    typeLabel: "Residential · Villa",
    title: "Zion Hills — 2 BHK Villa",
    photoCount: "14 photos",
    src: "/assets/portfolio/zion-hills-villa/livinng-800.webp",
    srcset:
      "/assets/portfolio/zion-hills-villa/livinng-400.webp 400w, /assets/portfolio/zion-hills-villa/livinng-800.webp 800w, /assets/portfolio/zion-hills-villa/livinng-1600.webp 1600w",
    alt: "Zion Hills — 2 BHK Villa — Residential interior design by Babell Group",
  },
  {
    slug: "chennai-1bhk",
    category: "residential" as const,
    typeLabel: "Residential · Chennai",
    title: "1 BHK Flat Interiors",
    photoCount: "25 photos",
    src: "/assets/portfolio/chennai-1bhk/living-800.webp",
    srcset:
      "/assets/portfolio/chennai-1bhk/living-400.webp 400w, /assets/portfolio/chennai-1bhk/living-800.webp 800w, /assets/portfolio/chennai-1bhk/living-1600.webp 1600w",
    alt: "1 BHK Flat Interiors — Residential interior design by Babell Group",
  },
  {
    slug: "rajajinagar-3bhk",
    category: "residential" as const,
    typeLabel: "Residential · Rajajinagar",
    title: "3 BHK Residential House",
    photoCount: "9 photos",
    src: "/assets/portfolio/rajajinagar-3bhk/master-bedroom-mat-800.webp",
    srcset:
      "/assets/portfolio/rajajinagar-3bhk/master-bedroom-mat-400.webp 400w, /assets/portfolio/rajajinagar-3bhk/master-bedroom-mat-800.webp 800w, /assets/portfolio/rajajinagar-3bhk/master-bedroom-mat-1600.webp 1600w",
    alt: "3 BHK Residential House — Residential interior design by Babell Group",
  },
  {
    slug: "as-groups-podcast-studio",
    category: "commercial" as const,
    typeLabel: "Commercial · Studio Design",
    title: "AS Groups & Construction — Podcast Studio",
    photoCount: "14 photos",
    src: "/assets/portfolio/as-groups-podcast-studio/podcast-room-1-800.webp",
    srcset:
      "/assets/portfolio/as-groups-podcast-studio/podcast-room-1-400.webp 400w, /assets/portfolio/as-groups-podcast-studio/podcast-room-1-800.webp 800w, /assets/portfolio/as-groups-podcast-studio/podcast-room-1-1600.webp 1600w",
    alt: "AS Groups & Construction — Podcast Studio — Commercial interior design by Babell Group",
  },
] as const;

export const DELIVERED_WORK_LIST = [
  { type: "Residential", name: "2 BHK Residential Residence", location: "Bengaluru" },
  { type: "Residential", name: "2 BHK Private Home Interiors", location: "Karnataka" },
  { type: "Café & Restaurant", name: "Hospitality & Specialty Dining Flagships", location: "Commercial F&B" },
  { type: "Auditorium", name: "Acoustic Auditorium Commissions", location: "Across India" },
  { type: "Institutional", name: "Architectural Museum Exhibition", location: "Museum Design" },
  { type: "Exhibition", name: "Architectural Design Pavilion", location: "Bengaluru" },
  { type: "Institutional", name: "Contemporary Campus Interiors", location: "Educational" },
  { type: "Exterior", name: "Civic Elevation Architecture", location: "Bengaluru" },
  { type: "Exterior", name: "Bespoke Villa Facade Elevation", location: "Private Commission" },
] as const;

export const DESIGN_DISCIPLINES = [
  {
    id: "cat-residential",
    title: "Residential Interiors",
    badge: "12 specialities",
    image: "/assets/images/hero-living-room.webp",
    alt: "Residential Interiors by Babell Group",
    items: [
      "Living Room Designs",
      "Bedroom Interiors",
      "Modular Kitchen Designs",
      "Dining Area Interiors",
      "TV Unit Designs",
      "Wardrobe Designs",
      "Pooja Unit Designs",
      "Children's Room Designs",
      "Bathroom Designs",
      "Balcony Designs",
      "Utility Area Designs",
      "Luxury Villa Interiors",
    ],
  },
  {
    id: "cat-commercial",
    title: "Commercial Interiors",
    badge: "8 specialities",
    image: "/assets/images/portfolio-office.webp",
    alt: "Commercial Interiors by Babell Group",
    items: [
      "Office Interiors",
      "Retail Showrooms",
      "Cafés & Restaurants",
      "Clinics & Healthcare Spaces",
      "Salons & Spas",
      "Commercial Shops",
      "Reception & Waiting Areas",
      "Co-working Spaces",
    ],
  },
  {
    id: "cat-exterior",
    title: "Exterior & Elevation",
    badge: "3 specialities",
    image: "/assets/images/hero-secondary.webp",
    alt: "Exterior & Elevation by Babell Group",
    items: ["Residential Elevations", "Villa Exteriors", "Commercial Building Exteriors"],
  },
  {
    id: "cat-visualization",
    title: "3D Visualization",
    badge: "5 specialities",
    image: "/assets/images/portfolio-dining.webp",
    alt: "3D Visualization by Babell Group",
    items: [
      "Photorealistic 3D Renders",
      "Design Concepts",
      "Walkthrough Visualizations",
      "Mood Boards",
      "Material & Colour Concepts",
    ],
  },
] as const;

export const FOUNDERS = [
  {
    name: "Claire Laurent",
    role: "Principal Creative Director | Architecture & Spatial Atelier",
    exp: "12+ years",
    photo: "/assets/images/founder-creative.jpg",
    bio: "Leading Babell Group's architectural vision, Claire oversees spatial choreography, bespoke materiality, lighting architecture, and custom millwork direction. Trained in European classical proportion and contemporary Indian craftsmanship, she shapes quiet, enduring residences and flagship commercial environments.",
  },
  {
    name: "Devansh Kapoor",
    role: "Managing Partner | Turnkey Execution & Private Client Strategy",
    exp: "15+ years",
    photo: "/assets/images/founder-managing.jpg",
    bio: "With over 15 years directing complex architectural builds and luxury hospitality turnkeys, Devansh governs Babell Group's engineering standards, vendor atelier network, budget transparency, and punctual white-glove handover for every private residence and commercial flagship.",
  },
] as const;

export const WHY_CHOOSE_US = [
  { icon: "home", text: "End-to-End Interior Design & Execution" },
  { icon: "pen", text: "Customized Residential & Commercial Solutions" },
  { icon: "ruler", text: "Innovative Space Planning & 3D Visualization" },
  { icon: "layers", text: "Architectural Materials & Precision Hardware" },
  { icon: "receipt", text: "Transparent Pricing & Dedicated Project Governance" },
  { icon: "team", text: "In-House Design & Master Execution Atelier" },
  { icon: "clock", text: "Punctual White-Glove Delivery" },
  { icon: "shield", text: "Craftsmanship Backed by Up to 10-Year Warranty" },
  { icon: "heart", text: "Private Client-Centric Approach" },
  { icon: "phone", text: "Dedicated Post-Handover Concierge Care" },
] as const;
