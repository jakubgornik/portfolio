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

export const machinesManagerTech = [
  "Typescript",
  "React.js",
  "Next.js",
  "TailwindCSS",
  "Auth.js",
  "Firebase",
];
export const easyBankTech = [
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

export const machinesManagerDesc = [
  "Machines Manager",
  "Web application for machines management",
  "This web application provides many functionalities that aims to improve the processes of managing machines and scheduling. Application allows to add, delete and modify machines, set statuses and monitor them thanks to implemented table. Moreover registered user can use based on statuses calcualted statistics",
];

export const easyBankDesc = [
  "EasyBank",
  "Modern single page application",
  "EasyBank is a website built and designed from scratch, that is fully responsive, user friendly and has many eye-catching animations that makes browsing through application as smooth as possible",
];
