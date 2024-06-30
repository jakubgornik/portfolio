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
  "MaterialUI",
  "HTML",
  "Git",
  "CSS(SASS)",
  "Figma",
  "Jira",
  "Firebase",
  "MongoDB",
  "SQL",
  "Redux toolkit",
  "Zustand",
  "React Testing Library",
  "Vitest",
  "Jest",
  "Framer motion",
  "Tanstack Query",
  "GraphQL",
] as const;

export const jobs = [
  {
    timeRange: "June 2023 - July 2023,",
    company: "Euvic",
    ocupation: "Frontend developer",
    jobDescription: [
      "Developing modern web applications using React.js, Next.js and TailwindCSS",
      "Creating reusable components, hooks and utilities",
      "Working within a team of developers, designers and project managers",
      "Participating in code reviews",
      "Implementing new features and fixing bugs",
    ],
    secondJobPeriod: {
      timeRange: "May 2024 - June 2024",
      company: "Euvic",
      ocupation: "Frontend developer",
      jobDescription: [
        "Actively contributing to the refactor of the codebase to improve its quality and maintainability",
        "Developing modern web applications using Vue.js and its ecosystem",
        "Participating in the agile development of the client's product",
        "Actively participating in code reviews and pair programming sessions",
        "Implementing new features and fixing bugs",
      ],
    },
  },
  {
    timeRange: "August 2022 - September 2022",
    company: "Webo",
    ocupation: "Frontend developer",
    jobDescription: [
      "Developing modern web applications using Vue.js, Nuxt.js and TailwindCSS",
      "Responsible for creating modern single page application from scratch, according to provided design",
      "Implementing new features and fixing bugs",
      "Creating reusable components, hooks and utilities",
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
