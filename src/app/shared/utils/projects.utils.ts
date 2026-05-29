import { projectsData } from "../data/projects.data";
import { Project, ProjectId } from "../types/projects.types";

export const getProjectById = (id: ProjectId): Project | undefined => {
  return projectsData.find((project) => project.id === id);
};
