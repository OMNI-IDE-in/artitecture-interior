# Babell Group — Architectural Interiors & Design Atelier

Complete Next.js (App Router + TypeScript + Tailwind CSS) frontend codebase for **Babell Group**.

## Routes

- `/` — Homepage (Interactive Hero Room Explorer, Trust Marquee, Client Challenges, 8-Step Journey Rail, 60-Second Style Finder Quiz, BHK Package Selector & Comparison Table, Client Testimonials Carousel, FAQs, Consultation Form, Atelier Concierge Guide, Mobile Sticky CTA)
- `/about` — About Us (Atelier Leadership `Claire Laurent` & `Devansh Kapoor`, Heritage Story, Mission & Vision, Animated Stats, Why Babell Group, Recent Commissions)
- `/services` — Services (Sticky Scrollspy Sidebar, Progress Rail, Category Filters, 8 Service Details, 8-Step Process)
- `/portfolio` — Portfolio (Category Filter, 4 Photographed Case Studies, 9 Additional Delivered Commissions, 4 Design Disciplines)
- `/projects/[slug]` — Individual Project Case Studies with Fullscreen Accessible Lightbox & `?img=` Deep-Linking:
  - `/projects/zion-hills-villa`
  - `/projects/chennai-1bhk`
  - `/projects/rajajinagar-3bhk`
  - `/projects/as-groups-podcast-studio`
- `/blog` & `/blog/[slug]` — Editorial Architectural Journal (9 Complete Planning Guides)
- `/contact` — Contact & Consultation Booking (Bengaluru & Mumbai Atelier Details, Embedded Maps, Prefilled Inquiry Form via Query Params, `/api/enquiry`)

## Getting Started

```bash
npm install
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000).
