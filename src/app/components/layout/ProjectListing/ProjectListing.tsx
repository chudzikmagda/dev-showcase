import type { FC } from "react";
import ProjectCard from "@/app/components/ui/ProjectCard/ProjectCard";
import { projectsData } from "@/app/shared/data/projects.data";
import { getTechnologyTag } from "@/app/shared/utils/technologies.utils";
import type { TagData } from "@/app/shared/types/tag.types";
import { Container } from "./projectListing.styles";

const ProjectListing: FC = () => {
  return (
    <Container>
      {projectsData.map((project) => {
        const tags = project.technologies
          .map(getTechnologyTag)
          .filter((tag): tag is TagData => tag !== null);

        return (
          <ProjectCard
            key={project.title}
            image={project.image}
            title={project.title}
            description={project.description}
            tags={tags}
            caseStudyUrl={project.detailsUrl}
          />
        );
      })}
    </Container>
  );
};

export default ProjectListing;
