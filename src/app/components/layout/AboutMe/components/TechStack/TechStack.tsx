"use client";
import React from "react";
import Card from "@/app/components/ui/Card/Card";
import styled from "styled-components";
import { gridPositions, technologies } from "./techstack.data";
import { GridPosition, TechStackCategories } from "./techstack.types";
import { breakpoints } from "../../../../../shared/styles/breakpoints";

const TechStack: React.FC = () => {
  const categories = Object.values(TechStackCategories);

  return (
    <>
      <TechStackHeading>Technology Stack</TechStackHeading>
      <TechStackWrapper>
        {categories.map((category: TechStackCategories) => {
          const technologiesInCategory = technologies.filter(
            (tech) => tech.category === category,
          );
          const tags = technologiesInCategory.map((tech) => ({
            icon: tech.image.imageSrc,
            label: tech.image.label,
          }));
          const position = gridPositions[category];
          return (
            <>
              <GridItem
                key={category}
                colSpan={position.colSpan}
                rowSpan={position.rowSpan}
              >
                <Card
                  title={category}
                  borderColor="var(--secondary-color-90)"
                  tags={tags}
                />
              </GridItem>
            </>
          );
        })}
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
