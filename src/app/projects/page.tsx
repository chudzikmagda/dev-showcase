import type { Metadata } from "next";
import { JSX } from "react";

import { PageWrapper, H1Heading } from "./projects.styles";
import ProjectsContent from "../components/layout/ProjectsContent/ProjectsContent";
import { projectsData } from "../shared/data/projects.data";

export const metadata: Metadata = {
  title: "Projects | Magda Chudzik",
  description:
    "Browse selected frontend and UI/UX projects implemented by Magda Chudzik.",
};

const ProjectsPage = (): JSX.Element => {
  return (
    <PageWrapper>
      <H1Heading>Projects</H1Heading>
      <ProjectsContent projects={projectsData} />
    </PageWrapper>
  );
};

export default ProjectsPage;
