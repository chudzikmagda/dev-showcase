import type { Project } from "@/app/shared/types/projects.types";
import { Technology } from "@/app/shared/types/technologies.types";

export type ProjectFilterProps = {
  projects: Project[];
  activeTechnology: Technology | null;
  onFilterChange: (technology: Technology | null) => void;
};
