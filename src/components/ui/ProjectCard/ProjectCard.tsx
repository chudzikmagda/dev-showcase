import type { FC } from "react";

import BrowserFrame from "@/components/ui/BrowserFrame/BrowserFrame";

import {
  Content,
  Description,
  Icons,
  Title,
  Visual,
} from "./projectCard.styles";
import { ProjectCardProps } from "./projectCard.types";
import Card from "../Card/Card";
import Icon from "../Icon/Icon";

const ProjectCard: FC<ProjectCardProps> = ({
  image,
  title,
  description,
  tags,
  caseStudyUrl,
}) => {
  return (
    <Card href={caseStudyUrl} style={{ background: "none" }}>
      <Visual>
        <BrowserFrame
          image={{
            src: image.src,
            alt: image.alt ?? `${title} preview`,
          }}
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
