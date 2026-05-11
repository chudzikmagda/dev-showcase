import { ImagePosition } from "@/app/shared/types/image.types";
import type { ProjectSectionData } from "@/app/shared/types/projects.types";

export interface ProjectSectionProps {
  project: ProjectSectionData;
  imagePosition: ImagePosition;
}
