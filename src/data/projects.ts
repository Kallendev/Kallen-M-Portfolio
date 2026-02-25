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
    id: "fundifix",
    title: "Fundifix",
    description: "A modern finance app concept with clean UI and smooth user flows.",
    tech_stack: ["React", "TypeScript", "Tailwind"],
    live_url: "https://fundifix.vercel.app/",
    repo_url: "https://github.com/Kallendev/fundifix",
    image_url: "/projects/fundifix.png",
    featured: true,
  },
  {
    id: "jibuks",
    title: "JiBUKS",
    description: "Business management platform UI/UX + web experience.",
    tech_stack: ["React", "Tailwind", "Figma"],
    live_url: null,
    repo_url: null,
    image_url: "/projects/jibuks.png",
    featured: false,
  },
];