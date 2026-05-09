import type { ProjectSectionData } from "@/app/components/layout/Projects/projects.data";

export enum ImagePosition {
  LEFT = "left",
  RIGHT = "right",
}

export interface ProjectSectionProps {
  project: ProjectSectionData;
  imagePosition?: ImagePosition;
}
