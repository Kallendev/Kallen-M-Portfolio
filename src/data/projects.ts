export interface Project {
  id: string;
  title: string;
  description: string;
  tech_stack: string[];
  live_url?: string | null;
  repo_url?: string | null;
  image_url?: string | null;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "africa-unique-tours-safaris",
    title: "Africa Unique Tours & Safaris",
    description: "Travel and safari website designed to present destinations, experiences, and bookings with a polished brand-first experience.",
    tech_stack: ["React", "TypeScript", "Tailwind", "UI/UX"],
    live_url: "https://www.africauniquetourssafaris.com/",
    repo_url: null,
    image_url: "https://res.cloudinary.com/drfdoiwg1/image/upload/v1792511777/elephants_npvnxx_bq2rgu.jpg",
    featured: false,
  },
  {
    id: "unclesamnexus",
    title: "Unclesam Nexus",
    description: "Modern business website focused on clarity, trust, and strong conversion-focused messaging for a professional service brand.",
    tech_stack: ["React", "Tailwind", "Responsive Design"],
    live_url: "https://unclesamnexus.us/",
    repo_url: null,
    image_url: "https://res.cloudinary.com/drfdoiwg1/image/upload/v1792511776/environmenthero_ckeklh.png",
    featured: false,
  },
  {
    id: "honey-hive-blush",
    title: "Honey Hive Blush",
    description: "Creative brand and website experience focused on storytelling, product appeal, and strong visual identity.",
    tech_stack: ["React", "UI Design", "Brand Experience"],
    live_url: "https://honey-hive-blush.vercel.app/",
    repo_url: null,
    image_url: "https://res.cloudinary.com/drfdoiwg1/image/upload/v1792511525/honey_t3ayjw.png",
    featured: false,
  },
  {
    id: "apbc-africa",
    title: "APBC Africa",
    description: "Professional organisation website built to communicate mission, services, and a strong institutional presence online.",
    tech_stack: ["React", "TypeScript", "Web Design"],
    live_url: "https://apbcafrica.com/",
    repo_url: null,
    image_url: "https://res.cloudinary.com/drfdoiwg1/image/upload/v1792511780/apbc_afgjbf.jpg",
    featured: false,
  },
  {
    id: "fundifix",
    title: "Fundifix",
    description: "A modern finance app concept with clean UI and smooth user flows.",
    tech_stack: ["React", "TypeScript", "Tailwind"],
    live_url: "https://fundifix.vercel.app/",
    repo_url: "https://github.com/Kallendev/fundifix",
    image_url: "https://res.cloudinary.com/drfdoiwg1/image/upload/v1772014217/fundifix_image_dwbjbk.jpg",
    featured: false,
  },
  {
    id: "jibuks",
    title: "JiBUKS",
    description: "Business management platform UI/UX + web experience.",
    tech_stack: ["React", "Tailwind", "Figma"],
    live_url: null,
    repo_url: null,
    image_url: "https://res.cloudinary.com/drfdoiwg1/image/upload/v1763530679/samples/cup-on-a-table.jpg",
    featured: false,
  },
];