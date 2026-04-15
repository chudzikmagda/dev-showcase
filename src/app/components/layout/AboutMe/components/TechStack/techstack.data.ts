import { TechStackCategories } from "./techstack.types";

export const categoryBackgrounds = new Map([
  [TechStackCategories.Frontend, "#CA4941"],
  [TechStackCategories.Backend, "#CA7B41"],
  [TechStackCategories.AI, "#CAB841"],
  [TechStackCategories.Testing, "#7BCA41"],
  [TechStackCategories.DevOps, "#41B8CA"],
  [TechStackCategories.Design, "#415BCA"],
  [TechStackCategories.PM, "#7B41CA"],
  [TechStackCategories.Knowledge, "#CA41A8"],
]);

export const technologies = [
  {
    imageSrc: "/images/techstack/js.svg",
    title: "JavaScript",
    category: TechStackCategories.Frontend,
  },
  {
    imageSrc: "/images/techstack/typescript.svg",
    title: "TypeScript",
    category: TechStackCategories.Frontend,
  },
  {
    imageSrc: "/images/techstack/angular.svg",
    title: "Angular",
    category: TechStackCategories.Frontend,
  },
  {
    imageSrc: "/images/techstack/react.svg",
    title: "React",
    category: TechStackCategories.Frontend,
  },
  {
    imageSrc: "/images/techstack/nextjs.svg",
    title: "Next.js",
    category: TechStackCategories.Frontend,
  },
  { imageSrc: "", title: "Nx", category: TechStackCategories.Frontend },
  {
    imageSrc: "/images/techstack/css.svg",
    title: "CSS",
    category: TechStackCategories.Frontend,
  },
  {
    imageSrc: "/images/techstack/sass.svg",
    title: "Sass",
    category: TechStackCategories.Frontend,
  },
  {
    imageSrc: "",
    title: "Styled Components",
    category: TechStackCategories.Frontend,
  },
  {
    imageSrc: "/images/techstack/bootstrap.svg",
    title: "Bootstrap",
    category: TechStackCategories.Frontend,
  },
  {
    imageSrc: "/images/techstack/bem.svg",
    title: "BEM",
    category: TechStackCategories.Frontend,
  },

  {
    imageSrc: "/images/techstack/nestjs.svg",
    title: "NestJS",
    category: TechStackCategories.Backend,
  },
  { imageSrc: "", title: "Express.js", category: TechStackCategories.Backend },
  { imageSrc: "", title: "Node.js", category: TechStackCategories.Backend },
  { imageSrc: "", title: "MongoDB", category: TechStackCategories.Backend },

  { imageSrc: "", title: "Cursor", category: TechStackCategories.AI },
  { imageSrc: "", title: "GitHub Copilot", category: TechStackCategories.AI },
  { imageSrc: "", title: "Gemini", category: TechStackCategories.AI },

  { imageSrc: "", title: "Jest", category: TechStackCategories.Testing },
  { imageSrc: "", title: "Jasmine", category: TechStackCategories.Testing },
  { imageSrc: "", title: "Cypress", category: TechStackCategories.Testing },
  { imageSrc: "", title: "Playwright", category: TechStackCategories.Testing },

  {
    imageSrc: "/images/techstack/git.svg",
    title: "Git",
    category: TechStackCategories.DevOps,
  },
  { imageSrc: "", title: "GitHub", category: TechStackCategories.DevOps },
  { imageSrc: "", title: "GitLab", category: TechStackCategories.DevOps },
  {
    imageSrc: "",
    title: "GitHub Actions",
    category: TechStackCategories.DevOps,
  },
  { imageSrc: "", title: "Azure", category: TechStackCategories.DevOps },

  {
    imageSrc: "/images/techstack/figma.svg",
    title: "Figma",
    category: TechStackCategories.Design,
  },
  {
    imageSrc: "/images/techstack/ps.svg",
    title: "Photoshop",
    category: TechStackCategories.Design,
  },
  {
    imageSrc: "/images/techstack/ai.svg",
    title: "Illustrator",
    category: TechStackCategories.Design,
  },

  { imageSrc: "", title: "Jira", category: TechStackCategories.PM },
  { imageSrc: "", title: "Slack", category: TechStackCategories.PM },

  { imageSrc: "", title: "UX", category: TechStackCategories.Knowledge },
  { imageSrc: "", title: "UI", category: TechStackCategories.Knowledge },
  { imageSrc: "", title: "SEO", category: TechStackCategories.Knowledge },
  {
    imageSrc: "",
    title: "Accessibility",
    category: TechStackCategories.Knowledge,
  },
  {
    imageSrc: "",
    title: "Performance",
    category: TechStackCategories.Knowledge,
  },
];
