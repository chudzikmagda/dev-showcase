import Link from "next/link";
import styled from "styled-components";

import { Breakpoints } from "@/shared/types/breakpoints.types";

import { CardAlign } from "./card.types";

export const CardLink = styled(Link)`
  display: block;
  width: 100%;
  text-decoration: none;
  color: inherit;

  &:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
    border-radius: 16px;
  }
`;

export const CardBase = styled.div<{ $align?: CardAlign }>`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: ${({ $align = CardAlign.Start }) =>
    $align === CardAlign.Center ? "center" : "flex-start"};
  height: 100%;
  border: 1px solid var(--secondary-color-70);
  border-radius: 16px;
  background: var(--card-bg);
  padding: 2rem 1rem;
  transition:
    transform var(--transition-default),
    border-color var(--transition-default);

  @media (min-width: ${Breakpoints.MOBILE}) {
    padding: 3rem 2rem;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: var(--primary-color);
  }
`;
