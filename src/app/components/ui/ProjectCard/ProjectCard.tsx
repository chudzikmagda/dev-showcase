import type { FC } from "react";

import Icon from "@/app/components/ui/Icon/Icon";

import {
  Card,
  Content,
  CoverImage,
  Description,
  Icons,
  Title,
  Visual,
} from "./projectCard.styles";
import { ProjectCardProps } from "./projectCard.types";

const ProjectCard: FC<ProjectCardProps> = ({
  image,
  title,
  description,
  tags,
  caseStudyUrl,
}) => {
  return (
    <Card href={caseStudyUrl} aria-label={`View case study: ${title}`}>
      <Visual>
        <CoverImage
          src={image.src}
          alt={image.alt ?? `${title} preview`}
          sizes="(min-width: 1025px) 30vw, (min-width: 768px) 50vw, 100vw"
          fill
        />
      </Visual>

      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>

        <Icons>
          {tags.map((tag) =>
            tag.icon ? (
              <Icon
                key={tag.label}
                iconUrl={tag.icon}
                width={20}
                height={20}
                alt={tag.label}
              />
            ) : null,
          )}
        </Icons>
      </Content>
    </Card>
  );
};

export default ProjectCard;
