import { getProjectById } from "../../shared/utils/projects.utils";
import { Project, ProjectId } from "../../shared/types/projects.types";
import ProjectShowcase from "@/app/components/layout/ProjectShowcase/ProjectShowcase";
import { JSX } from "react";

const BookwormPage = (): JSX.Element => {
  const project: Project | undefined = getProjectById(ProjectId.BOOKWORM);

  if (!project) return <div>Project not found</div>;
  return <ProjectShowcase {...project} />;
};

export default BookwormPage;
