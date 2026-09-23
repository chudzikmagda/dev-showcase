import type { Metadata } from "next";
import { JSX } from "react";

import { ProjectId, type Project } from "../../../shared/types/projects.types";
import ProjectShowcase from "../_components/layout/ProjectShowcase/ProjectShowcase";
import { getProjectById, getProjectMetadata } from "../_utils/projects.utils";

export function generateMetadata(): Metadata {
  return getProjectMetadata(ProjectId.WORKSPACE_OF_TOMORROW);
}

const WorkspaceOfTomorrowPage = (): JSX.Element => {
  const project: Project | undefined = getProjectById(
    ProjectId.WORKSPACE_OF_TOMORROW,
  );

  if (!project) return <div>Project not found</div>;
  return <ProjectShowcase {...project} />;
};

export default WorkspaceOfTomorrowPage;
