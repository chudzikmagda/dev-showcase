import type { Metadata } from "next";
import { PageWrapper, H1Heading } from "./projects.styles";
import ProjectListing from "../components/layout/ProjectListing/ProjectListing";

export const metadata: Metadata = {
  title: "Projects | Magda Chudzik",
  description:
    "Browse selected frontend and UI/UX projects implemented by Magda Chudzik.",
};

const ProjectsPage = () => {
  return (
    <PageWrapper>
      <H1Heading>Projects</H1Heading>
      <ProjectListing />
    </PageWrapper>
  );
};

export default ProjectsPage;
