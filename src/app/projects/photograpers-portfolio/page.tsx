import { JSX } from "react";
import ProjectShowcase from "../../components/layout/ProjectShowcase/ProjectShowcase";
import { projectsData } from "../../shared/data/projects.data";

const projectData = projectsData.find((project) =>
  project.title.toLowerCase().includes("photographer"),
);

const PhotographersPortfolioPage = (): JSX.Element | null =>
  projectData ? <ProjectShowcase {...projectData} /> : null;

export default PhotographersPortfolioPage;
