import type { FC } from "react";

import ProjectCard from "@/app/components/ui/ProjectCard/ProjectCard";
import type { TagData } from "@/app/shared/types/tag.types";
import {
  getTechnologyTag,
  isTagData,
} from "@/app/shared/utils/technologies.utils";

import { Container } from "./projectListing.styles";
import type { ProjectListingProps } from "./projectListing.types";

const ProjectListing: FC<ProjectListingProps> = ({ projects }) => {
  return (
    <Container>
      {projects.map((project) => {
        const tags: TagData[] = project.technologies
          .map(getTechnologyTag)
          .filter(isTagData);

        return (
          <ProjectCard
            key={project.title}
            image={project.listImage}
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
