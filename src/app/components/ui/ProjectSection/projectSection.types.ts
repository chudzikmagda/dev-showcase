import { ImagePosition } from "@/app/shared/types/image.types";
import type { Project } from "@/app/shared/types/projects.types";

export interface ProjectSectionProps {
  project: Project;
  imagePosition: ImagePosition;
}
