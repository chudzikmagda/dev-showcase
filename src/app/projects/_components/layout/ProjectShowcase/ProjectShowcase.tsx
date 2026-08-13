import Image from "next/image";
import { JSX } from "react";

import {
  InfoLabel,
  InfoParagraph,
  InfoSection,
  PageWrapper,
  ImagesWrapper,
  ShowcaseImageFrame,
  ShowcaseLabel,
  ShowcaseContainer,
  ShowcaseImageWrapper,
  MobileImagesWrapper,
  MobileImageItem,
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
  showcaseMobileImages,
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
                      <InfoParagraph>{projectRange}</InfoParagraph>
                    </div>
                    <div>
                      <InfoLabel>description:</InfoLabel>
                      <InfoParagraph>{description}</InfoParagraph>
                    </div>
                    <div>
                      <InfoLabel>year:</InfoLabel>
                      <InfoParagraph>{implementationDate}</InfoParagraph>
                    </div>
                  </InfoSection>
                )}
              </ShowcaseImageWrapper>
            ))}
            {showcaseMobileImages && (
              <MobileImagesWrapper>
                {showcaseMobileImages.map((img, index) => (
                  <MobileImageItem key={img.src}>
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
                  </MobileImageItem>
                ))}
              </MobileImagesWrapper>
            )}
          </ImagesWrapper>
        </ShowcaseContainer>
      </PageWrapper>
    </>
  );
};

export default ProjectShowcase;
