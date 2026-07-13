import { JSX } from "react";

import ProjectShowcase from "@/app/projects/_components/layout/ProjectShowcase/ProjectShowcase";

import { ProjectId, type Project } from "../../../shared/types/projects.types";
import { getProjectById } from "../_utils/projects.utils";

const BookwormPage = (): JSX.Element => {
  const project: Project | undefined = getProjectById(ProjectId.BOOKWORM);

  if (!project) return <div>Project not found</div>;
  return <ProjectShowcase {...project} />;
};

export default BookwormPage;
