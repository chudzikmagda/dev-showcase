"use client";

import { useMemo, useRef, useState, useEffect, type FC } from "react";
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
  SlideArrowButton,
} from "./projectFilter.styles";
import { ProjectFilterProps, SlideDirection } from "./projectFilter.types";

const ProjectFilter: FC<ProjectFilterProps> = ({
  projects,
  activeTechnology,
  onFilterChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const filtersRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const container = filtersRef.current;
      if (!container) return;
      setShowLeftArrow(container.scrollLeft > 5); // 5px tolerance
    };
    const container = filtersRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    return () => {
      if (container) container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const technologies: Technology[] = useMemo(
    () =>
      Array.from(
        new Set(projects.flatMap((project) => project.technologies)),
      ).sort((first, second) => first.localeCompare(second)),
    [projects],
  );

  const handleSlide = (direction: SlideDirection) => {
    filtersRef.current?.scrollBy({
      left: direction === SlideDirection.LEFT ? -220 : 220,
      behavior: "smooth",
    });
  };

  return (
    <FiltersContainer>
      <FiltersBarRow $isOpen={isOpen}>
        {showLeftArrow && (
          <SlideArrowButton
            $position={SlideDirection.LEFT}
            type="button"
            aria-label="Scroll filters to the left"
            onClick={() => handleSlide(SlideDirection.LEFT)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              style={{ color: "var(--primary-color)" }}
            >
              <path
                d="M13 16L7 10L13 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </SlideArrowButton>
        )}
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
        <SlideArrowButton
          $position={SlideDirection.RIGHT}
          type="button"
          aria-label="Scroll filters to the right"
          onClick={() => handleSlide(SlideDirection.RIGHT)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            style={{ color: "var(--primary-color)" }}
          >
            <path
              d="M7 4L13 10L7 16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </SlideArrowButton>
      </FiltersBarRow>
    </FiltersContainer>
  );
};

export default ProjectFilter;
