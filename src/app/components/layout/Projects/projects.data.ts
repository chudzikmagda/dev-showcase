export interface ProjectSectionData {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  projectRange: string;
  implementationDate: string;
  technologies: Array<{
    icon: string;
    label: string;
  }>;
  detailsUrl: string;
  liveUrl: string;
}

export const projectsData: ProjectSectionData[] = [
  {
    title: "Photographer's portfolio",
    description:
      "The website shows the pictures in an attractive way and focuses the visitors' attention on the author's pics.",
    image: {
      src: "/images/projects/portfolio-magda-chudzik/listing.jpg",
      alt: "Photographer portfolio preview",
    },
    projectRange: "UI/UX design, frontend development, SEO.",
    implementationDate: "2023",
    technologies: [
      {
        icon: "/images/techstack/react.svg",
        label: "React",
      },
      {
        icon: "/images/techstack/typescript.svg",
        label: "TypeScript",
      },
      {
        icon: "/images/techstack/sass.svg",
        label: "Sass",
      },
    ],
    detailsUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Bookworm",
    description:
      "Angular standalone application that helps the users collect and manage data about the books they have read.",
    image: {
      src: "/images/projects/bookworm/listing.jpg",
      alt: "Bookworm app preview",
    },
    projectRange: "UI/UX design, frontend development.",
    implementationDate: "2022",
    technologies: [
      {
        icon: "/images/techstack/angular.svg",
        label: "Angular",
      },
      {
        icon: "/images/techstack/typescript.svg",
        label: "TypeScript",
      },
      {
        icon: "/images/techstack/sass.svg",
        label: "Sass",
      },
    ],
    detailsUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Workspace of tomorrow",
    description:
      'The website "Workspace of tomorrow" aims at showing how the office work will change in the future. I have created this website for Nowy Styl which is an European leader in the office furniture sector.',
    image: {
      src: "/images/projects/workspace-of-tomorrow/listing.jpg",
      alt: "Workspace of tomorrow preview",
    },
    projectRange:
      "Layout design (Figma), frontend development, Wordpress theme implementation.",
    implementationDate: "2021",
    technologies: [
      {
        icon: "/images/techstack/html.svg",
        label: "HTML",
      },
      {
        icon: "/images/techstack/css.svg",
        label: "CSS",
      },
      {
        icon: "/images/techstack/js.svg",
        label: "JavaScript",
      },
    ],
    detailsUrl: "#",
    liveUrl: "#",
  },
];
