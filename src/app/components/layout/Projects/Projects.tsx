import ProjectSection from "@/app/components/ui/ProjectSection/ProjectSection";
import { projectsData } from "@/app/shared/data/projects.data";
import { ImagePosition } from "@/app/shared/types/image.types";

import {
  H2Heading,
  SectionWrapper,
  TextWrapper,
  SectionsWrapper,
} from "./projects.styles";

const Projects = (): JSX.Element => {
  return (
    <SectionWrapper id="projects">
      <TextWrapper>
        <H2Heading>Projects</H2Heading>
      </TextWrapper>
      <SectionsWrapper>
        {projectsData
          .filter((project) => project.featured)
          .map((project, index) => (
            <ProjectSection
              key={project.title + index}
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
