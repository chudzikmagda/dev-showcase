import { Image } from "./image.types";

export interface Project {
  title: string;
  description: string;
  featured: boolean;
  image: Image;
  projectRange: string;
  implementationDate: string;
  technologies: string[];
  detailsUrl: string;
}
