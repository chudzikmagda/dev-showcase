"use client";

import Tag from "@/app/components/ui/Tag/Tag";
import { TagColorMode, TagContentMode } from "@/app/shared/types/tag.types";
import { Technology } from "@/app/shared/types/technologies.types";
import {
  RefObject,
  useEffect,
  useMemo,
  useRef,
  useState,
  type FC,
} from "react";

import {
  SCROLL_TOLERANCE_PX,
  FILTER_SCROLL_OFFSET_PX,
  FILTER_ARROW_ICON_SIZE,
} from "./projectFilter.constants";
import {
  FilterButtonsWrapper,
  FiltersBarRow,
  FiltersContainer,
  SlideArrowButton,
} from "./projectFilter.styles";
import { ProjectFilterProps, SlideDirection } from "./projectFilter.types";

const ProjectFilter: FC<ProjectFilterProps> = ({
  projects,
  activeTechnology,
  onFilterChange,
}) => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const filtersRef: RefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const container: HTMLDivElement | null = filtersRef.current;
      if (!container) return;
      setShowLeftArrow(container.scrollLeft > SCROLL_TOLERANCE_PX);
    };
    const container: HTMLDivElement | null = filtersRef.current;
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

  const handleSlide = (direction: SlideDirection): void => {
    filtersRef.current?.scrollBy({
      left:
        direction === SlideDirection.LEFT
          ? -FILTER_SCROLL_OFFSET_PX
          : FILTER_SCROLL_OFFSET_PX,
      behavior: "smooth",
    });
  };

  return (
    <FiltersContainer>
      <FiltersBarRow $isOpen={false}>
        {showLeftArrow && (
          <SlideArrowButton
            $position={SlideDirection.LEFT}
            type="button"
            aria-label="Scroll filters to the left"
            onClick={() => handleSlide(SlideDirection.LEFT)}
          >
            <svg
              width={FILTER_ARROW_ICON_SIZE}
              height={FILTER_ARROW_ICON_SIZE}
              viewBox={`0 0 ${FILTER_ARROW_ICON_SIZE} ${FILTER_ARROW_ICON_SIZE}`}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
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
          ref={filtersRef}
          $isOpen={false}
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
            width={FILTER_ARROW_ICON_SIZE}
            height={FILTER_ARROW_ICON_SIZE}
            viewBox={`0 0 ${FILTER_ARROW_ICON_SIZE} ${FILTER_ARROW_ICON_SIZE}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
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
