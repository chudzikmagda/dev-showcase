import type { Metadata } from "next";
import { JSX } from "react";

import ProjectsContent from "./_components/layout/ProjectsContent/ProjectsContent";
import { PageWrapper, H1Heading } from "./projects.styles";
import { projectsData } from "../../shared/data/projects.data";
import { buildSeoMetadata, SITE_URL } from "../../shared/utils/seo.utils";

export const metadata: Metadata = buildSeoMetadata({
  title: "Magda Chudzik | Projects",
  description:
    "Browse selected frontend and UI/UX projects by Magda Chudzik, featuring modern web development, accessible interfaces, and refined, user‑focused design.",
  url: `${SITE_URL}/projects`,
  keywords:
    "frontend developer, UI/UX designer, Magda Chudzik, frontend projects, UI/UX portfolio, web development, React developer, Angular developer, Next.js developer, TypeScript developer, design systems, responsive design",
});

const ProjectsPage = (): JSX.Element => {
  return (
    <PageWrapper>
      <H1Heading>Projects</H1Heading>
      <ProjectsContent projects={projectsData} />
    </PageWrapper>
  );
};

export default ProjectsPage;
