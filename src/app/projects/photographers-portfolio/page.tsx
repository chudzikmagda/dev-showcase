import { JSX } from "react";

import ProjectShowcase from "../../components/layout/ProjectShowcase/ProjectShowcase";
import { ProjectId, type Project } from "../../shared/types/projects.types";
import { getProjectById } from "../../shared/utils/projects.utils";

const PhotographersPortfolioPage = (): JSX.Element => {
  const project: Project | undefined = getProjectById(
    ProjectId.PHOTOGRAPHERS_PORTFOLIO,
  );

  if (!project) return <div>Project not found</div>;
  return <ProjectShowcase {...project} />;
};

export default PhotographersPortfolioPage;
