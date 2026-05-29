import { JSX } from "react";

import { TagColorMode, TagContentMode } from "../../../shared/types/tag.types";
import { Technology } from "../../../shared/types/technologies.types";
import { getTechnologyTag } from "../../../shared/utils/technologies.utils";
import Tag from "../../ui/Tag/Tag";
import {
  ImplementationDate,
  PageWrapper,
  ProjectDescription,
  ProjectImage,
  ProjectImageWrapper,
  ProjectLabel,
  ShowcaseContainer,
  TagsRow,
  Title,
} from "./projectShowcase.styles";
import { ProjectShowcaseProps } from "./projectShowcase.types";

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
          <ProjectLabel>Project</ProjectLabel>
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
          <ProjectImageWrapper>
            {showcaseImages?.map((img, idx) => (
              <div
                key={img.src}
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <ProjectImage src={img.src} alt={img.alt} />
                {idx === 0 && (
                  <>
                    <ImplementationDate>
                      {implementationDate}
                    </ImplementationDate>
                    <ProjectDescription>{description}</ProjectDescription>
                  </>
                )}
              </div>
            ))}
          </ProjectImageWrapper>
        </ShowcaseContainer>
      </PageWrapper>
    </>
  );
};

export default ProjectShowcase;
