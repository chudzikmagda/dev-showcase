import { projectsData } from "../../../shared/data/projects.data";
import {
  type Project,
  type ProjectId,
} from "../../../shared/types/projects.types";

export const getProjectById = (id: ProjectId): Project | undefined => {
  return projectsData.find((project) => project.id === id);
};
