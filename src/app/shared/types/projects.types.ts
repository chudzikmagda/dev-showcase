import { Image } from "./image.types";
import { Technology } from "./technologies.types";

export interface Project {
  title: string;
  description: string;
  featured: boolean;
  image: Image;
  projectRange: string;
  implementationDate: string;
  technologies: Technology[];
  detailsUrl: string;
}
