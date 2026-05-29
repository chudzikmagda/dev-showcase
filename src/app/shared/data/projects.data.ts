import type { Project } from "../types/projects.types";
import { Technology } from "../types/technologies.types";

export const projectsData: Project[] = [
  {
    title: "The software engineer portfolio",
    description:
      "The website which you are currently viewing. Check more details and how I made it.",
    featured: false,
    listImage: {
      src: "/images/projects/dev-portfolio/listing.jpg",
      alt: "Software engineer portfolio preview",
    },
    showcaseImages: [
      {
        src: "/images/projects/dev-portfolio/mockup2.jpg",
        alt: "Software engineer portfolio mockup 2",
      },
      {
        src: "/images/projects/dev-portfolio/mockup3.jpg",
        alt: "Software engineer portfolio mockup 3",
      },
    ],
    projectRange: "UI/UX design, frontend development.",
    implementationDate: "2026",
    technologies: [
      Technology.NEXT_JS,
      Technology.TYPESCRIPT,
      Technology.STYLED_COMPONENTS,
      Technology.SASS,
    ],
    detailsUrl: "#",
  },
  {
    title: "Photographer's portfolio",
    description:
      "The website shows the pictures in an attractive way and focuses the visitors' attention on the author's pics.",
    featured: true,
    listImage: {
      src: "/images/projects/photo-portfolio/listing.jpg",
      alt: "Photographer portfolio preview",
    },
    showcaseImages: [
      {
        src: "/images/projects/photo-portfolio/mockup1.jpg",
        alt: "Photographer portfolio mockup 1",
      },
      {
        src: "/images/projects/photo-portfolio/mockup2.jpg",
        alt: "Photographer portfolio mockup 2",
      },
      {
        src: "/images/projects/photo-portfolio/mockup3.jpg",
        alt: "Photographer portfolio mockup 3",
      },
    ],
    projectRange: "UI/UX design, frontend development, SEO.",
    implementationDate: "2023",
    technologies: [Technology.REACT, Technology.TYPESCRIPT, Technology.SASS],
    detailsUrl: "projects/photograpers-portfolio",
  },
  {
    title: "Bookworm",
    description:
      "Angular standalone application that helps the users collect and manage data about the books they have read.",
    featured: true,
    listImage: {
      src: "/images/projects/bookworm/listing.jpg",
      alt: "Bookworm app preview",
    },
    showcaseImages: [
      {
        src: "/images/projects/bookworm/mockup1.jpg",
        alt: "Bookworm app mockup 1",
      },
      {
        src: "/images/projects/bookworm/mockup2.jpg",
        alt: "Bookworm app mockup 2",
      },
      {
        src: "/images/projects/bookworm/mockup3.jpg",
        alt: "Bookworm app mockup 3",
      },
    ],
    projectRange: "UI/UX design, frontend development.",
    implementationDate: "2022",
    technologies: [Technology.ANGULAR, Technology.TYPESCRIPT, Technology.SASS],
    detailsUrl: "#",
  },
  {
    title: "Workspace of tomorrow",
    description:
      'The website "Workspace of tomorrow" aims at showing how the office work will change in the future. I have created this website for Nowy Styl which is an European leader in the office furniture sector.',
    featured: true,
    listImage: {
      src: "/images/projects/workspace-of-tomorrow/listing.jpg",
      alt: "Workspace of tomorrow preview",
    },
    showcaseImages: [
      {
        src: "/images/projects/workspace-of-tomorrow/mockup-1.jpg",
        alt: "Workspace of tomorrow mockup 1",
      },
      {
        src: "/images/projects/workspace-of-tomorrow/mockup-2.jpg",
        alt: "Workspace of tomorrow mockup 2",
      },
      {
        src: "/images/projects/workspace-of-tomorrow/mockup-3.jpg",
        alt: "Workspace of tomorrow mockup 3",
      },
    ],
    projectRange:
      "Layout design (Figma), frontend development, Wordpress theme implementation.",
    implementationDate: "2021",
    technologies: [Technology.JAVASCRIPT, Technology.HTML, Technology.CSS],
    detailsUrl: "#",
  },
  {
    title: "Weather App",
    description:
      "Check the current weather as well as the forecast for the next 16 days in a selected town by using geolocation.",
    featured: false,
    listImage: {
      src: "/images/projects/weather-app/listing.jpg",
      alt: "Weather app preview",
    },
    showcaseImages: [
      {
        src: "/images/projects/weather-app/mockup1.jpg",
        alt: "Weather app mockup 1",
      },
      {
        src: "/images/projects/weather-app/mockup2.jpg",
        alt: "Weather app mockup 2",
      },
      {
        src: "/images/projects/weather-app/mockup3.jpg",
        alt: "Weather app mockup 3",
      },
    ],
    projectRange: "UI/UX design, frontend development.",
    implementationDate: "2020",
    technologies: [Technology.HTML, Technology.CSS, Technology.JAVASCRIPT],
    detailsUrl: "#",
  },
];
