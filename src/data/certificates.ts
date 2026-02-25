export interface Certificate {
  id: string;
  title: string;
  image_url: string;
  issuer: string;
  issued_date: string;
}

export const certificates: Certificate[] = [
  {
    id: "graphics-design-cohort30",
    title: "Graphics Designing — Cohort 30",
    image_url:
      "https://res.cloudinary.com/drfdoiwg1/image/upload/v1772014235/KALLEN_BG30_1_kieq8l.png",
    issuer: "MWEA Software Company",
    issued_date: "2025-06-23",
  },

  {
    id: "data-analysis-excel",
    title: "Data Analysis using Excel Training",
    image_url:
      "https://res.cloudinary.com/drfdoiwg1/image/upload/v1772016452/Data_Analytics_using_Excel_Trainig_bszzrd.jpg",
    issuer: "Ajira Digital Program",
    issued_date: "2025-04-14",
  },

  {
    id: "financial-markets-trading",
    title: "Financial Markets & Trading Training",
    image_url:
      "https://res.cloudinary.com/drfdoiwg1/image/upload/v1772016452/Financial_Markets_Trading_xjgufy.jpg",
    issuer: "Ajira Digital Program",
    issued_date: "2025-03-03",
  },

  {
    id: "ai-graphic-design",
    title: "AI for Graphic Design Training",
    image_url:
      "https://res.cloudinary.com/drfdoiwg1/image/upload/v1772016452/Ai_for_graphic_design_unkoqn.jpg",
    issuer: "Ajira Digital Program",
    issued_date: "2025-02-24",
  },

  {
    id: "online-freelancing",
    title: "Online Freelancing Work Readiness Training",
    image_url:
      "https://res.cloudinary.com/drfdoiwg1/image/upload/v1772016452/Freelancing_work_readness_gfaeuh.jpg",
    issuer: "Ajira Digital Program",
    issued_date: "2025-01-20",
  },
];