import type { FC } from "react";

import Button from "@/app/components/ui/Button/Button";
import { ButtonVersion } from "@/app/components/ui/Button/button.types";
import Tag from "@/app/components/ui/Tag/Tag";
import { TagData, TagColorMode } from "@/app/shared/types/tag.types";
import {
  getTechnologyTag,
  isTagData,
} from "@/app/shared/utils/technologies.utils";

import {
  Actions,
  CaseStudyLabel,
  GroupText,
  GroupTitle,
  ProjectCard,
  ProjectContent,
  ProjectDescription,
  ProjectImage,
  ProjectTitle,
  ProjectVisual,
  Technologies,
} from "./projectSection.styles";
import { type ProjectSectionProps } from "./projectSection.types";

const ProjectSection: FC<ProjectSectionProps> = ({
  project,
  imagePosition,
}) => {
  const technologyTags: TagData[] = project.technologies
    .map(getTechnologyTag)
    .filter(isTagData);

  return (
    <ProjectCard>
      <ProjectVisual $imagePosition={imagePosition}>
        <ProjectImage
          src={project.image.src}
          alt={project.image.alt ?? "Project image"}
          sizes="(min-width: 1025px) 50vw, 100vw"
          fill
        />
      </ProjectVisual>
      <ProjectContent>
        <CaseStudyLabel>Case study</CaseStudyLabel>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>
        <GroupTitle>The project range:</GroupTitle>
        <GroupText>{project.projectRange}</GroupText>
        <GroupTitle>The technology stack:</GroupTitle>
        <Technologies>
          {technologyTags.map((technology, index) => (
            <Tag
              key={`${technology.label}-${index}`}
              {...technology}
              colorMode={TagColorMode.LIGHT}
            />
          ))}
        </Technologies>
        <GroupTitle>Year:</GroupTitle>
        <GroupText>{project.implementationDate}</GroupText>
        <Actions>
          <Button
            href={project.detailsUrl}
            version={ButtonVersion.PRIMARY}
            label="Check the details"
            hasArrow
          />
        </Actions>
      </ProjectContent>
    </ProjectCard>
  );
};

export default ProjectSection;
