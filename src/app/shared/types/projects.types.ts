import { Image } from "./image.types";
import { TagData } from "./tag.types";

export interface ProjectSectionData {
  title: string;
  description: string;
  image: Image;
  projectRange: string;
  implementationDate: string;
  techTags: TagData[];
  detailsUrl: string;
}
