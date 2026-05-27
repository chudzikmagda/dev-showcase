"use client";
import React, { JSX } from "react";
import styled from "styled-components";

import TechCard from "@/app/components/ui/TechCard/TechCard";
import { breakpoints } from "@/app/shared/styles/breakpoints";
import { TagColorMode, TagContentMode } from "@/app/shared/types/tag.types";

import { gridPositions, technologies } from "./techstack.data";
import type { GridPosition } from "./techstack.types";
import { TechStackCategories } from "./techstack.types";

const TechStack = (): JSX.Element => {
  const data = Object.values(TechStackCategories).map((category) => ({
    category,
    position: gridPositions[category],
    tags: technologies
      .filter((tag) => tag.category === category)
      .map((tag) => ({
        icon: tag.image.src,
        label: tag.image.label ?? "",
        colorMode: TagColorMode.DARK,
        contentMode: TagContentMode.ICON_AND_TEXT,
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
