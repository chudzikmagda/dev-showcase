import { JSX } from "react";
import ProjectShowcase from "../../components/layout/ProjectShowcase/ProjectShowcase";
import { Project, ProjectId } from "../../shared/types/projects.types";
import { getProjectById } from "../../shared/utils/projects.utils";

const WorkspaceOfTomorrowPage = (): JSX.Element => {
  const project: Project | undefined = getProjectById(
    ProjectId.WORKSPACE_OF_TOMORROW,
  );

  if (!project) return <div>Project not found</div>;
  return <ProjectShowcase {...project} />;
};

export default WorkspaceOfTomorrowPage;
