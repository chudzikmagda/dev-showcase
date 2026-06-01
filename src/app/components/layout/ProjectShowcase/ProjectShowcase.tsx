import { JSX } from "react";

import {
  InfoLabel,
  InfoSection,
  PageWrapper,
  ShowcaseImage,
  ImagesWrapper,
  ShowcaseLabel,
  ShowcaseContainer,
  ShowcaseImageWrapper,
  TagsRow,
  Title,
} from "./projectShowcase.styles";
import { ProjectShowcaseProps } from "./projectShowcase.types";
import { TagColorMode, TagContentMode } from "../../../shared/types/tag.types";
import { Technology } from "../../../shared/types/technologies.types";
import { getTechnologyTag } from "../../../shared/utils/technologies.utils";
import Tag from "../../ui/Tag/Tag";

const ProjectShowcase = ({
  title,
  technologies,
  showcaseImages,
  implementationDate,
  description,
}: ProjectShowcaseProps): JSX.Element => {
  return (
    <>
      <PageWrapper>
        <ShowcaseContainer>
          <ShowcaseLabel>Project</ShowcaseLabel>
          <Title>{title}</Title>
          <TagsRow>
            {technologies.map((tech) => {
              const tagData = getTechnologyTag(tech as Technology);
              return tagData ? (
                <Tag key={String(tech)} {...tagData} />
              ) : (
                <Tag
                  key={String(tech)}
                  label={String(tech)}
                  colorMode={TagColorMode.DARK}
                  contentMode={TagContentMode.TEXT_ONLY}
                />
              );
            })}
          </TagsRow>
          <ImagesWrapper>
            {showcaseImages?.map((img, index) => (
              <ShowcaseImageWrapper key={img.src}>
                <ShowcaseImage
                  src={img.src}
                  alt={img.alt ?? `${title} showcase image ${index + 1}`}
                />
                {index === 0 && (
                  <InfoSection>
                    <div>
                      <InfoLabel>year:</InfoLabel>
                      <p>{implementationDate}</p>
                    </div>
                    <div>
                      <InfoLabel>description:</InfoLabel>
                      <p>{description}</p>
                    </div>
                  </InfoSection>
                )}
              </ShowcaseImageWrapper>
            ))}
          </ImagesWrapper>
        </ShowcaseContainer>
      </PageWrapper>
    </>
  );
};

export default ProjectShowcase;
