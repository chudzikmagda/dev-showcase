"use client";
import React from "react";
import TechCard from "@/app/components/ui/TechCard/TechCard";
import { TagVariant } from "@/app/shared/types/tag.types";
import styled from "styled-components";
import { gridPositions, technologies } from "./techstack.data";
import type { GridPosition } from "./techstack.types";
import { TechStackCategories } from "./techstack.types";
import { breakpoints } from "@/app/shared/styles/breakpoints";

const TechStack: React.FC = () => {
  const data = Object.values(TechStackCategories).map((category) => ({
    category,
    position: gridPositions[category],
    tags: technologies
      .filter((tag) => tag.category === category)
      .map((tag) => ({
        icon: tag.image.src,
        label: tag.image.label ?? "",
        variant: TagVariant.DARK,
      })),
  }));

  return (
    <>
      <TechStackHeading>Technology Stack</TechStackHeading>
      <TechStackWrapper>
        {data.map(({ category, position, tags }) => (
          <GridItem key={category} {...position}>
            <TechCard title={category} tags={tags} />
          </GridItem>
        ))}
      </TechStackWrapper>
    </>
  );
};
export default TechStack;

const TechStackWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    gap: 20px;
  }
`;

const GridItem = styled.div<GridPosition>`
  @media (min-width: ${breakpoints.desktop}) {
    grid-column: span ${({ colSpan }) => colSpan};
    grid-row: span ${({ rowSpan }) => rowSpan};
  }
`;

const TechStackHeading = styled.h3`
  color: var(--primary-text-color);
  font-size: 1.625rem;
  margin-bottom: 2rem;
`;
