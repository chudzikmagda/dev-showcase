"use client";

import { useMemo, useRef, useState, type FC } from "react";
import Button from "@/app/components/ui/Button/Button";
import {
  ButtonSize,
  ButtonVersion,
} from "@/app/components/ui/Button/button.types";
import Tag from "@/app/components/ui/Tag/Tag";
import { TagColorMode, TagContentMode } from "@/app/shared/types/tag.types";
import { Technology } from "@/app/shared/types/technologies.types";
import {
  FiltersBarRow,
  FiltersContainer,
  FilterButtonsWrapper,
  FilterMobileControls,
  SlideArrowButton,
} from "./projectFilter.styles";
import type { ProjectFilterProps } from "./projectFilter.types";

const ProjectFilter: FC<ProjectFilterProps> = ({
  projects,
  activeTechnology,
  onFilterChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const filtersRef = useRef<HTMLDivElement>(null);

  const technologies: Technology[] = useMemo(
    () =>
      Array.from(
        new Set(projects.flatMap((project) => project.technologies)),
      ).sort((first, second) => first.localeCompare(second)),
    [projects],
  );

  const handleSlideLeft = () => {
    filtersRef.current?.scrollBy({ left: -220, behavior: "smooth" });
  };

  const handleSlideRight = () => {
    filtersRef.current?.scrollBy({ left: 220, behavior: "smooth" });
  };

  return (
    <FiltersContainer>
      <FilterMobileControls>
        <Button
          label="Filters"
          version={ButtonVersion.PRIMARY}
          hasArrow={false}
          size={ButtonSize.SMALL}
          onClick={() => setIsOpen((previous) => !previous)}
        />
      </FilterMobileControls>
      <FiltersBarRow $isOpen={isOpen}>
        {isOpen ? (
          <SlideArrowButton
            $position="left"
            type="button"
            aria-label="Scroll filters to the left"
            onClick={handleSlideLeft}
          >
            {"<"}
          </SlideArrowButton>
        ) : null}
        <FilterButtonsWrapper
          id="project-filters-bar"
          $isOpen={isOpen}
          ref={filtersRef}
        >
          <Tag
            colorMode={TagColorMode.DARK}
            contentMode={TagContentMode.TEXT_ONLY}
            active={activeTechnology === null}
            onClick={() => onFilterChange(null)}
            label="All"
            clickable
          />
          {technologies.map((technology: Technology) => {
            const isActive = activeTechnology === technology;

            return (
              <Tag
                key={technology}
                label={technology}
                colorMode={TagColorMode.DARK}
                contentMode={TagContentMode.TEXT_ONLY}
                active={isActive}
                onClick={() => onFilterChange(isActive ? null : technology)}
                clickable
              />
            );
          })}
        </FilterButtonsWrapper>
        {isOpen ? (
          <SlideArrowButton
            $position="right"
            type="button"
            aria-label="Scroll filters to the right"
            onClick={handleSlideRight}
          >
            {">"}
          </SlideArrowButton>
        ) : null}
      </FiltersBarRow>
    </FiltersContainer>
  );
};

export default ProjectFilter;
