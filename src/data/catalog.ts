import roomsJson from "./rooms.json";
import projectsJson from "./projects.json";
import servicesJson from "./services.json";
import blogJson from "./blog.json";
import { assetSrcSet, assetUrl } from "@/lib/asset";

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

const rawRooms = roomsJson as Record<RoomKey, HeroRoom>;
export const HERO_ROOMS: Record<RoomKey, HeroRoom> = (Object.keys(rawRooms) as RoomKey[]).reduce(
  (acc, key) => {
    const r = rawRooms[key];
    acc[key] = {
      ...r,
      img: assetUrl(r.img),
      srcset: assetSrcSet(r.srcset) || "",
    };
    return acc;
  },
  {} as Record<RoomKey, HeroRoom>
);

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

const rawProjects = projectsJson as Record<string, ProjectData>;
export const PROJECTS: Record<string, ProjectData> = Object.keys(rawProjects).reduce(
  (acc, slug) => {
    const p = rawProjects[slug];
    acc[slug] = {
      ...p,
      heroImage: {
        ...p.heroImage,
        src: assetUrl(p.heroImage.src),
        srcset: assetSrcSet(p.heroImage.srcset) || "",
      },
      shots: p.shots.map((shot) => ({
        ...shot,
        full: assetUrl(shot.full),
        src: assetUrl(shot.src),
        srcset: assetSrcSet(shot.srcset) || "",
      })),
      nextProject: p.nextProject
        ? {
            ...p.nextProject,
            thumb: assetUrl(p.nextProject.thumb),
          }
        : null,
    };
    return acc;
  },
  {} as Record<string, ProjectData>
);

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

export const SERVICES: ServiceItem[] = (servicesJson as ServiceItem[]).map((s) => ({
  ...s,
  image: assetUrl(s.image),
  srcset: assetSrcSet(s.srcset) || "",
}));

export interface BlogPost {
  slug: string;
  title: string;
  url: string;
  image: string;
  localImage?: string;
  date: string;
}

export const BLOG_POSTS: BlogPost[] = (blogJson as BlogPost[]).map((b) => ({
  ...b,
  image: assetUrl(b.image),
  localImage: b.localImage ? assetUrl(b.localImage) : undefined,
}));
