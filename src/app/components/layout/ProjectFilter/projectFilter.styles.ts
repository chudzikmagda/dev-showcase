import styled from "styled-components";
import { breakpoints } from "@/app/shared/styles/breakpoints";

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
`;

export const FilterMobileControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  & > * {
    margin: 0 !important;
  }

  @media (min-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

export const FiltersBarRow = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  width: 100%;
  position: relative;

  @media (min-width: ${breakpoints.mobile}) {
    display: flex;
    width: fit-content;
    gap: 0.5rem;
    align-items: center;
  }
`;

export const SlideArrowButton = styled.button<{ $position?: "left" | "right" }>`
  border: none;
  background: transparent;
  color: var(--primary-text-color);
  width: 2rem;
  height: 2.25rem;
  font-size: 1.25rem;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $position }) => ($position === "left" ? "left: 0.5rem;" : "right: 0.5rem;")};

  &:hover {
    opacity: 0.7;
  }

  @media (min-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

export const FilterTitle = styled.p`
  margin: 0;
  text-align: center;
  font-size: 0.875rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--secondary-text-color);
`;

export const FilterButtonsWrapper = styled.div<{ $isOpen: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  gap: 0.5rem;
  padding: 0.5rem 2.5rem;
  box-sizing: border-box;
  border-radius: 24px;
  border: 1px solid rgba(var(--secondary-color-rgb), 0.45);
  background: linear-gradient(
    180deg,
    rgba(var(--secondary-color-rgb), 0.52) 0%,
    rgba(var(--secondary-color-rgb), 0.34) 100%
  );
  box-shadow:
    0 4px 14px rgba(0, 0, 0, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(6px);

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  & > * {
    flex: 0 0 auto;
  }

  @media (min-width: ${breakpoints.mobile}) {
    display: flex;
    width: fit-content;
    padding: 0.5rem;
  }
`;
