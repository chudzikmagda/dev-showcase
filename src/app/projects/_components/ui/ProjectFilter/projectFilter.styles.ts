import styled from "styled-components";

import { Breakpoints } from "@/shared/types/breakpoints.types";

import { SlideDirection } from "./projectFilter.types";

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.75rem;
  width: 100%;

  @media (min-width: ${Breakpoints.DESKTOP}) {
    align-items: center;
  }
`;

export const FiltersBarRow = styled.div<{ $isOpen: boolean }>`
  position: relative;
  display: flex;
  gap: 0.5rem;
  width: 100%;

  @media (min-width: ${Breakpoints.MOBILE}) {
    position: static;
    gap: 0;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const SlideArrowButton = styled.button<{
  $position?: SlideDirection;
}>`
  position: absolute;
  top: 50%;
  ${({ $position }) =>
    $position === SlideDirection.LEFT ? "left: 0;" : "right:0;"};
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  padding: ${({ $position }) =>
    $position === SlideDirection.LEFT
      ? "0.25rem 1rem 0.25rem 0"
      : "0.25rem 0 0.25rem 1rem"};
  background: ${({ $position }) =>
    $position === SlideDirection.LEFT
      ? "linear-gradient(to right, var(--secondary-color) 0%, rgba(var(--secondary-color-rgb), 0) 100%)"
      : "linear-gradient(to left, var(--secondary-color) 0%, rgba(var(--secondary-color-rgb), 0) 100%)"};
  color: var(--primary-color);
  border: none;
  cursor: pointer;
  z-index: 10;

  @media (min-width: ${Breakpoints.MOBILE}) {
    display: none;
  }
`;

export const FilterButtonsWrapper = styled.div<{ $isOpen: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  gap: 0.5rem;
  box-sizing: border-box;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  & > * {
    flex: 0 0 auto;
  }

  @media (min-width: ${Breakpoints.MOBILE}) {
    width: 100%;
    justify-content: center;
  }
`;
