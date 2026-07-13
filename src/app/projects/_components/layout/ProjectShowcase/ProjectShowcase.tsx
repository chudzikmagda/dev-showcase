import Image from "next/image";
import { JSX } from "react";

import {
  InfoLabel,
  InfoSection,
  PageWrapper,
  ImagesWrapper,
  ShowcaseImageFrame,
  ShowcaseLabel,
  ShowcaseContainer,
  ShowcaseImageWrapper,
  TagsRow,
  Title,
} from "./projectShowcase.styles";
import { ProjectShowcaseProps } from "./projectShowcase.types";
import Tag from "../../../../../components/ui/Tag/Tag";
import {
  TagColorMode,
  TagContentMode,
} from "../../../../../shared/types/tag.types";
import { getTechnologyTag } from "../../../../../shared/utils/technologies.utils";

const ProjectShowcase = ({
  title,
  technologies,
  showcaseImages,
  implementationDate,
  description,
  projectRange,
}: ProjectShowcaseProps): JSX.Element => {
  return (
    <>
      <PageWrapper>
        <ShowcaseContainer>
          <ShowcaseLabel>Project</ShowcaseLabel>
          <Title>{title}</Title>
          <TagsRow>
            {technologies.map((tech) => {
              const tagData = getTechnologyTag(tech);
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
            {showcaseImages.map((img, index) => (
              <ShowcaseImageWrapper key={img.src}>
                <ShowcaseImageFrame>
                  <Image
                    src={img.src}
                    alt={img.alt ?? `${title} showcase image ${index + 1}`}
                    width={1200}
                    height={675}
                    sizes="(max-width: 768px) 100vw, 1200px"
                    style={{ width: "100%", height: "auto" }}
                  />
                </ShowcaseImageFrame>
                {index === 0 && (
                  <InfoSection>
                    <div>
                      <InfoLabel>project range:</InfoLabel>
                      <p>{projectRange}</p>
                    </div>
                    <div>
                      <InfoLabel>description:</InfoLabel>
                      <p>{description}</p>
                    </div>
                    <div>
                      <InfoLabel>year:</InfoLabel>
                      <p>{implementationDate}</p>
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
