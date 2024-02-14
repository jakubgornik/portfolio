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
    name: "Tech stack",
    id: "#techstack",
  },
  {
    name: "Projects",
    id: "#projects",
  },
  {
    name: "Experience",
    id: "#experience",
  },
  {
    name: "Contact",
    id: "#contact",
  },
] as const;

export type SectionNames = (typeof navigationLinks)[number]["name"];

export const MachinesManagerTech = [
  "Typescript",
  "React.js",
  "Next.js",
  "TailwindCSS",
  "Auth.js",
  "Firebase",
];
export const EasyBankTech = [
  "Typescript",
  "React.js",
  "Next.js",
  "TailwindCSS",
];

export const technologiesAndTools = [
  "Javascript",
  "Typescript",
  "React.js",
  "Next.js",
  "Node.js",
  "TailwindCSS",
  "MaterialUi",
  "Html",
  "Git",
  "CSS(SCSS)",
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

export const jobs = [
  {
    timeRange: "June 2023 - July 2023",
    company: "Euvic",
    ocupation: "Frontend developer",
    jobDescription: [
      "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, KoalaHealth, Vanderbilt University, The 19th News, and more",
      "Deliver high-quality, robust production code for a diverse array of projects for clients",
    ],
  },
  {
    timeRange: "August 2022 - September 2022",
    company: "Webo",
    ocupation: "Frontend developer",
    jobDescription: [
      "Everytown for Gun Safety, Pratt Institute, KoalaHealth, Vanderbilt University, The 19th News, and more",
    ],
  },
];
