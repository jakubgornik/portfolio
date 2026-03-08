import { CardData } from "../content/experience-section";
import imageP1 from "../../public/img/1.png";
import imageP2 from "../../public/img/2.png";

export const navigationLinks = [
  {
    name: "Home",
    id: "#home",
    tKey: "home",
  },
  {
    name: "About",
    id: "#about",
    tKey: "about",
  },
  {
    name: "Tech stack",
    id: "#techstack",
    tKey: "techStack",
  },
  {
    name: "Experience",
    id: "#experience",
    tKey: "experience",
  },
  {
    name: "Projects",
    id: "#projects",
    tKey: "projects",
  },
  {
    name: "Contact",
    id: "#contact",
    tKey: "contact",
  },
] as const;

export type SectionNames = (typeof navigationLinks)[number]["name"];

export enum SectionName {
  Home = "Home",
  About = "About",
  TechStack = "Tech stack",
  Projects = "Projects",
  Experience = "Experience",
  Contact = "Contact",
}

export const technologiesAndTools = [
  "Javascript",
  "Typescript",
  "React.js",
  "Next.js",
  "Node.js",
  "Nest.js",
  "Express.js",
  "TailwindCSS",
  "MaterialUI",
  "HTML",
  "Git",
  "CSS",
  "Firebase",
  "Supabase",
  "AWS",
  "MongoDB",
  "Prisma",
  "Docker",
  "Playwright",
  "Vitest",
  "Jest",
] as const;

export const experienceCards: CardData[] = [
  {
    id: 1,
    company: "Gorrion",
    tKey: "gorrion",
    roleKey: "occupations.fullstack",
    tech: [
      "TypeScript",
      "React.js",
      "Next.js",
      "NestJS",
      "Prisma",
      "Firebase",
      "AWS",
      "Docker",
      "Jest",
      "Playwright",
      "MaterialUI",
      "styled-components",
    ],
    bg: "#1a1a1a",
  },
  {
    id: 2,
    company: "Euvic",
    tKey: "euvic",
    roleKey: "occupations.frontend",
    tech: ["TypeScript", "React.js", "Next.js", "TailwindCSS"],
    bg: "#262626",
  },
  {
    id: 3,
    company: "Webo",
    tKey: "webo",
    roleKey: "occupations.frontend",
    tech: ["TypeScript", "React.js", "Next.js", "TailwindCSS"],
    bg: "#333333",
  },
];

export const logiProjectStack = [
  "TypeScript",
  "TailwindCSS",
  "REST",
  "Next.js",
  "React.js",
  "Prisma",
  "Firebase",
  "shadcn",
];

export const timeworthProjectStack = [
  "TypeScript",
  "TailwindCSS",
  "REST",
  "NestJS",
  "React.js",
  "Prisma",
  "Supabase",
  "shadcn",
  "Jest",
];

export const projectsData = [
  {
    id: "timeworth",
    img: imageP1,
    alt: "Timeworth site image",
    githubUrl: "https://github.com/jakubgornik/timeworth",
    siteUrl: "https://www.timeworth.site/",
    technologies: timeworthProjectStack,
    tKey: "timeworth",
  },
  {
    id: "logi",
    img: imageP2,
    alt: "Logi site image",
    githubUrl: "https://github.com/jakubgornik/logi",
    siteUrl: "https://logi-drab.vercel.app/",
    technologies: logiProjectStack,
    tKey: "logi",
  },
];
