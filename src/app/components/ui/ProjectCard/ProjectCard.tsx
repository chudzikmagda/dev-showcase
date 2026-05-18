import type { FC } from "react";
import Button from "@/app/components/ui/Button/Button";
import {
  ButtonSize,
  ButtonVersion,
} from "@/app/components/ui/Button/button.types";
import Tag from "@/app/components/ui/Tag/Tag";
import { TagVariant } from "@/app/shared/types/tag.types";
import { ProjectCardProps } from "./projectCard.types";
import {
  Card,
  Content,
  CoverImage,
  Description,
  Footer,
  Tags,
  Title,
  Visual,
} from "./projectCard.styles";

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

        <Tags>
          {tags.map((tag) => (
            <Tag key={tag.label} {...tag} variant={TagVariant.DARK} />
          ))}
        </Tags>

        <Footer>
          <Button
            label="View case study"
            version={ButtonVersion.PRIMARY}
            size={ButtonSize.SMALL}
            hasArrow
            asSpan
          />
        </Footer>
      </Content>
    </Card>
  );
};

export default ProjectCard;
