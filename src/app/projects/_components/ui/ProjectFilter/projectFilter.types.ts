import type { Project } from "@/shared/types/projects.types";
import { Technology } from "@/shared/types/technologies.types";

export type ProjectFilterProps = {
  projects: Project[];
  activeTechnology: Technology | null;
  onFilterChange: (technology: Technology | null) => void;
};

export enum SlideDirection {
  LEFT = "left",
  RIGHT = "right",
}
