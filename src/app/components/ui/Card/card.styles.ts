import styled from "styled-components";

import { breakpoints } from "@/app/shared/styles/breakpoints";

import { CardAlign } from "./card.types";

export const CardBase = styled.div<{ $align?: CardAlign }>`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: ${({ $align = CardAlign.Start }) =>
    $align === CardAlign.Center ? "center" : "flex-start"};
  height: 100%;
  border: 1px solid var(--secondary-color-70);
  border-radius: 16px;
  background:
    radial-gradient(
      circle at top left,
      rgba(255, 255, 255, 0.03),
      transparent 45%
    ),
    linear-gradient(
      160deg,
      rgba(255, 255, 255, 0.07),
      rgba(255, 255, 255, 0.01)
    );
  padding: 2rem 1rem;
  transition:
    transform var(--transition-default),
    border-color var(--transition-default);

  @media (min-width: ${breakpoints.mobile}) {
    padding: 3rem 2rem;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: var(--primary-color);
  }
`;
