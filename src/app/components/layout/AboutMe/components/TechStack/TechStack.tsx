"use client";
import React from "react";
import CardGroup from "@/app/components/ui/CardGroup/CardGroup";
import styled from "styled-components";
import { technologies } from "./techstack.data";
import { TechStackCategories } from "./techstack.types";
import { categoryBackgrounds } from "./techstack.data";
import { breakpoints } from "../../../../../shared/styles/breakpoints";

const TechStack: React.FC = () => {
  const categories = Object.values(TechStackCategories);

  return (
    <TechStackWrapper>
      {categories.map((category: TechStackCategories) => {
        const cards = technologies
          .filter((tech) => tech.category === category)
          .map((tech) => ({
            ...tech,
          }));
        return (
          <CardGroup
            key={category}
            title={category}
            background={categoryBackgrounds.get(category) || "transparent"}
            cards={cards}
            cardImageWidth="32px"
            cardImageStyle={{ opacity: 0.2 }}
          />
        );
      })}
    </TechStackWrapper>
  );
};

export default TechStack;

const TechStackWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;
