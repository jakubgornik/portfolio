export const navigationLinks = [
  {
    name: "Home",
    id: "#home",
  },
  {
    name: "About",
    id: "#about",
  },
  {
    name: "Techstack",
    id: "#techstack",
  },
  {
    name: "Experience",
    id: "#experience",
  },
  {
    name: "Projects",
    id: "#projects",
  },
  {
    name: "Contact",
    id: "#contact",
  },
] as const;

export type SectionNames = (typeof navigationLinks)[number]["name"];

export const technologiesAndTools = [
  "Javascript",
  "Typescript",
  "React.js",
  "Next.js",
  "TailwindCSS",
  "MaterialUi",
  "Html",
  "Git",
  "Css ( Scss )",
  "Figma",
  "Jira",
  "Firebase",
  "MongoDB",
  "Redux toolkit",
  "Zustand",
  "React Testing Library",
  "Framer motion",
  "React Query",
] as const;
