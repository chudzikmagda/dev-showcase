import type { FC } from "react";

import Button from "@/components/ui/Button/Button";
import { ButtonSize, ButtonVersion } from "@/components/ui/Button/button.types";
import Card from "@/components/ui/Card/Card";
import { CardAlign } from "@/components/ui/Card/card.types";
import Tag from "@/components/ui/Tag/Tag";
import { TagColorMode, TagData } from "@/shared/types/tag.types";
import { getTechnologyTag, isTagData } from "@/shared/utils/technologies.utils";

import {
  Actions,
  GroupTitle,
  ProjectCard,
  ProjectContent,
  ProjectImage,
  ProjectTitle,
  ProjectVisual,
  Technologies,
} from "./projectSection.styles";
import { type ProjectSectionProps } from "./projectSection.types";

const ProjectSection: FC<ProjectSectionProps> = ({ project }) => {
  const technologyTags: TagData[] = project.technologies
    .map(getTechnologyTag)
    .filter(isTagData);

  return (
    <Card align={CardAlign.Start} style={{ paddingBottom: "0" }}>
      <ProjectCard>
        <ProjectVisual>
          <ProjectImage
            src={project.listImage.src}
            alt={project.listImage.alt ?? "Project image"}
            sizes="(min-width: 1025px) 50vw, 100vw"
            fill
          />
        </ProjectVisual>
        <ProjectContent>
          <ProjectTitle>{project.title}</ProjectTitle>
          <GroupTitle>The technology stack:</GroupTitle>
          <Technologies>
            {technologyTags.map((technology, index) => (
              <Tag
                key={`${technology.label}-${index}`}
                {...technology}
                colorMode={TagColorMode.DARK}
              />
            ))}
          </Technologies>
          <Actions>
            <Button
              href={project.detailsUrl}
              version={ButtonVersion.PRIMARY}
              size={ButtonSize.SMALL}
              label="Check the details"
              hasArrow
            />
          </Actions>
        </ProjectContent>
      </ProjectCard>
    </Card>
  );
};

export default ProjectSection;
