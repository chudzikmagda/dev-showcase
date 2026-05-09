import type { FC } from "react";
import Button from "@/app/components/ui/Button/Button";
import { ButtonType } from "@/app/components/ui/Button/button.types";
import Tag from "@/app/components/ui/Tag/Tag";
import {
  ImagePosition,
  type ProjectSectionProps,
} from "./projectSection.types";
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

const ProjectSection: FC<ProjectSectionProps> = ({
  project,
  imagePosition = ImagePosition.LEFT,
}) => {
  return (
    <ProjectCard>
      <ProjectVisual $imagePosition={imagePosition}>
        <ProjectImage
          src={project.image.src}
          alt={project.image.alt}
          width={0}
          height={0}
          sizes="100vw"
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
          {project.technologies.map((technology) => (
            <Tag
              key={`${technology.label}-${technology.icon}`}
              icon={technology.icon}
              label={technology.label}
            />
          ))}
        </Technologies>

        <GroupTitle>Year:</GroupTitle>
        <GroupText>{project.implementationDate}</GroupText>

        <Actions>
          <Button
            label="Check the details"
            version={ButtonType.PRIMARY}
            hasArrow
            href={project.detailsUrl}
          />
        </Actions>
      </ProjectContent>
    </ProjectCard>
  );
};

export default ProjectSection;
