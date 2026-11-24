import roomsJson from "./rooms.json";
import projectsJson from "./projects.json";
import servicesJson from "./services.json";
import blogJson from "./blog.json";

export interface RoomSpot {
  num: string;
  t: string;
  left: string;
  top: string;
}

export interface HeroRoom {
  img: string;
  srcset: string;
  alt: string;
  project: string;
  place: string;
  href: string;
  spots: RoomSpot[];
}

export type RoomKey = "zion" | "chennai" | "rajajinagar" | "podcast";

export const HERO_ROOMS: Record<RoomKey, HeroRoom> = roomsJson as Record<RoomKey, HeroRoom>;

export interface ProjectFact {
  label: string;
  value: string;
}

export interface ProjectShot {
  slug: string;
  key: string;
  full: string;
  caption: string;
  src: string;
  srcset: string;
  alt: string;
  label: string;
  wide: boolean;
}

export interface ProjectData {
  slug: string;
  title: string;
  location: string;
  categoryLabel: string;
  heroImage: {
    src: string;
    srcset: string;
    alt: string;
  };
  facts: ProjectFact[];
  intros: string[];
  whatsappHref: string;
  areas: string[];
  shots: ProjectShot[];
  nextProject: {
    slug: string;
    title: string;
    meta: string;
    thumb: string;
    alt: string;
  } | null;
}

export const PROJECTS: Record<string, ProjectData> = projectsJson as Record<string, ProjectData>;

export interface ServiceItem {
  id: string;
  category: "residential" | "commercial" | "design";
  num: string;
  title: string;
  description?: string;
  desc: string;
  detail: string;
  features: string[];
  image: string;
  srcset: string;
  imageAlt: string;
  whatsappHref: string;
}

export const SERVICES: ServiceItem[] = servicesJson as ServiceItem[];

export interface BlogPost {
  slug: string;
  title: string;
  url: string;
  image: string;
  localImage?: string;
  date: string;
}

export const BLOG_POSTS: BlogPost[] = blogJson as BlogPost[];
