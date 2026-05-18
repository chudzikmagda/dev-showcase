import type { Project } from "../types/projects.types";

export const projectsData: Project[] = [
  {
    title: "The software engineer portfolio",
    description:
      "The website which you are currently viewing. Check more details and how I made it.",
    featured: false,
    image: {
      src: "/images/projects/portfolio-frontend/listing.jpg",
      alt: "Software engineer portfolio preview",
    },
    projectRange: "UI/UX design, frontend development.",
    implementationDate: "2026",
    technologies: ["Next.js", "TypeScript", "Sass"],
    detailsUrl: "#",
  },
  {
    title: "Photographer's portfolio",
    description:
      "The website shows the pictures in an attractive way and focuses the visitors' attention on the author's pics.",
    featured: true,
    image: {
      src: "/images/projects/portfolio-magda-chudzik/listing.jpg",
      alt: "Photographer portfolio preview",
    },
    projectRange: "UI/UX design, frontend development, SEO.",
    implementationDate: "2023",
    technologies: ["React", "TypeScript", "Sass"],
    detailsUrl: "#",
  },
  {
    title: "Bookworm",
    description:
      "Angular standalone application that helps the users collect and manage data about the books they have read.",
    featured: true,
    image: {
      src: "/images/projects/bookworm/listing.jpg",
      alt: "Bookworm app preview",
    },
    projectRange: "UI/UX design, frontend development.",
    implementationDate: "2022",
    technologies: ["Angular", "TypeScript", "Sass"],
    detailsUrl: "#",
  },
  {
    title: "Workspace of tomorrow",
    description:
      'The website "Workspace of tomorrow" aims at showing how the office work will change in the future. I have created this website for Nowy Styl which is an European leader in the office furniture sector.',
    featured: true,
    image: {
      src: "/images/projects/workspace-of-tomorrow/listing.jpg",
      alt: "Workspace of tomorrow preview",
    },
    projectRange:
      "Layout design (Figma), frontend development, Wordpress theme implementation.",
    implementationDate: "2021",
    technologies: ["JavaScript", "HTML", "CSS"],
    detailsUrl: "#",
  },
  {
    title: "Weather App",
    description:
      "Check the current weather as well as the forecast for the next 16 days in a selected town by using geolocation.",
    featured: false,
    image: {
      src: "/images/projects/weather-app/listing.jpg",
      alt: "Weather app preview",
    },
    projectRange: "UI/UX design, frontend development.",
    implementationDate: "2020",
    technologies: ["HTML", "CSS", "JavaScript"],
    detailsUrl: "#",
  },
];
