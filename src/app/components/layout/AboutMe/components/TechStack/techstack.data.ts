import {
  GridPosition,
  TechStackCategories,
  Technology,
} from "./techstack.types";

export const technologies: Technology[] = [
  {
    image: { imageSrc: "/images/techstack/js.svg", label: "JavaScript" },
    category: TechStackCategories.Frontend,
  },
  {
    image: {
      imageSrc: "/images/techstack/typescript.svg",
      label: "TypeScript",
    },
    category: TechStackCategories.Frontend,
  },
  {
    image: { imageSrc: "/images/techstack/angular.svg", label: "Angular" },
    category: TechStackCategories.Frontend,
  },
  {
    image: { imageSrc: "/images/techstack/react.svg", label: "React" },
    category: TechStackCategories.Frontend,
  },
  {
    image: { imageSrc: "/images/techstack/nextjs.svg", label: "Next.js" },
    category: TechStackCategories.Frontend,
  },
  {
    image: { imageSrc: "/images/techstack/nx.svg", label: "Nx" },
    category: TechStackCategories.Frontend,
  },
  {
    image: { imageSrc: "/images/techstack/css.svg", label: "CSS" },
    category: TechStackCategories.Frontend,
  },
  {
    image: { imageSrc: "/images/techstack/sass.svg", label: "Sass" },
    category: TechStackCategories.Frontend,
  },
  {
    image: {
      imageSrc: "/images/techstack/styled-components.svg",
      label: "Styled Components",
    },
    category: TechStackCategories.Frontend,
  },
  {
    image: { imageSrc: "/images/techstack/bootstrap.svg", label: "Bootstrap" },
    category: TechStackCategories.Frontend,
  },
  {
    image: { imageSrc: "/images/techstack/bem.svg", label: "BEM" },
    category: TechStackCategories.Frontend,
  },

  {
    image: { imageSrc: "/images/techstack/nestjs.svg", label: "NestJS" },
    category: TechStackCategories.Backend,
  },
  {
    image: {
      imageSrc: "/images/techstack/express.js.svg",
      label: "Express.js",
    },
    category: TechStackCategories.Backend,
  },
  {
    image: { imageSrc: "/images/techstack/node.js.svg", label: "Node.js" },
    category: TechStackCategories.Backend,
  },
  {
    image: { imageSrc: "/images/techstack/mongodb.svg", label: "MongoDB" },
    category: TechStackCategories.Backend,
  },

  {
    image: { imageSrc: "/images/techstack/cursor.svg", label: "Cursor" },
    category: TechStackCategories.AI,
  },
  {
    image: {
      imageSrc: "/images/techstack/github-copilot.svg",
      label: "GitHub Copilot",
    },
    category: TechStackCategories.AI,
  },
  {
    image: { imageSrc: "/images/techstack/gemini.svg", label: "Gemini" },
    category: TechStackCategories.AI,
  },

  {
    image: { imageSrc: "/images/techstack/jest.svg", label: "Jest" },
    category: TechStackCategories.Testing,
  },
  {
    image: { imageSrc: "/images/techstack/jasmine.svg", label: "Jasmine" },
    category: TechStackCategories.Testing,
  },
  {
    image: {
      imageSrc: "/images/techstack/playwright.svg",
      label: "Playwright",
    },
    category: TechStackCategories.Testing,
  },
  {
    image: { imageSrc: "/images/techstack/cypress.svg", label: "Cypress" },
    category: TechStackCategories.Testing,
  },

  {
    image: { imageSrc: "/images/techstack/git.svg", label: "Git" },
    category: TechStackCategories.DevOps,
  },
  {
    image: { imageSrc: "/images/techstack/github.svg", label: "GitHub" },
    category: TechStackCategories.DevOps,
  },
  {
    image: { imageSrc: "/images/techstack/gitlab.svg", label: "GitLab" },
    category: TechStackCategories.DevOps,
  },
  {
    image: {
      imageSrc: "/images/techstack/github-actions.svg",
      label: "GitHub Actions",
    },
    category: TechStackCategories.DevOps,
  },
  {
    image: { imageSrc: "/images/techstack/azure.svg", label: "Azure" },
    category: TechStackCategories.DevOps,
  },

  {
    image: { imageSrc: "/images/techstack/figma.svg", label: "Figma" },
    category: TechStackCategories.Design,
  },
  {
    image: { imageSrc: "/images/techstack/ps.svg", label: "Photoshop" },
    category: TechStackCategories.Design,
  },
  {
    image: { imageSrc: "/images/techstack/ai.svg", label: "Illustrator" },
    category: TechStackCategories.Design,
  },
  {
    image: { imageSrc: "/images/techstack/indesign.svg", label: "Indesign" },
    category: TechStackCategories.Design,
  },

  {
    image: { imageSrc: "/images/techstack/jira.svg", label: "Jira" },
    category: TechStackCategories.PM,
  },
  {
    image: { imageSrc: "/images/techstack/slack.svg", label: "Slack" },
    category: TechStackCategories.PM,
  },

  {
    image: { imageSrc: "/images/techstack/ux.svg", label: "UX" },
    category: TechStackCategories.Knowledge,
  },
  {
    image: { imageSrc: "/images/techstack/ui.svg", label: "UI" },
    category: TechStackCategories.Knowledge,
  },
  {
    image: { imageSrc: "/images/techstack/seo.svg", label: "SEO" },
    category: TechStackCategories.Knowledge,
  },
  {
    image: {
      imageSrc: "/images/techstack/accessibility.svg",
      label: "Accessibility",
    },
    category: TechStackCategories.Knowledge,
  },
  {
    image: {
      imageSrc: "/images/techstack/performance.svg",
      label: "Performance",
    },
    category: TechStackCategories.Knowledge,
  },
  {
    image: { imageSrc: "/images/techstack/java.svg", label: "Java" },
    category: TechStackCategories.Learning,
  },
];

export const gridPositions: Record<TechStackCategories, GridPosition> = {
  [TechStackCategories.Frontend]: { colSpan: 2, rowSpan: 1 },
  [TechStackCategories.Backend]: { colSpan: 1, rowSpan: 1 },
  [TechStackCategories.AI]: { colSpan: 1, rowSpan: 1 },
  [TechStackCategories.Testing]: { colSpan: 1, rowSpan: 1 },
  [TechStackCategories.DevOps]: { colSpan: 1, rowSpan: 1 },
  [TechStackCategories.Design]: { colSpan: 1, rowSpan: 1 },
  [TechStackCategories.PM]: { colSpan: 1, rowSpan: 1 },
  [TechStackCategories.Knowledge]: { colSpan: 2, rowSpan: 1 },
  [TechStackCategories.Learning]: { colSpan: 1, rowSpan: 1 },
};
