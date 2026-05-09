import ProjectSection from "@/app/components/ui/ProjectSection/ProjectSection";
import { ImagePosition } from "@/app/components/ui/ProjectSection/projectSection.types";
import { projectsData } from "./projects.data";
import {
  H2Heading,
  SectionWrapper,
  TextWrapper,
  SectionsWrapper,
} from "./projects.styles";

const Projects = () => {
  return (
    <SectionWrapper id="projects">
      <TextWrapper>
        <H2Heading>Projects</H2Heading>
      </TextWrapper>
      <SectionsWrapper>
        {projectsData.map((project, index) => (
          <ProjectSection
            key={project.title}
            project={project}
            imagePosition={
              index % 2 === 0 ? ImagePosition.LEFT : ImagePosition.RIGHT
            }
          />
        ))}
      </SectionsWrapper>
    </SectionWrapper>
  );
};

export default Projects;
