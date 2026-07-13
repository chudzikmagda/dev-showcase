import styled from "styled-components";

import { Breakpoints } from "@/shared/types/breakpoints.types";

export const SectionWrapper = styled.section`
  width: 100%;
  background: var(--secondary-color);
  padding: calc(var(--basic-spacer) * 4) var(--basic-spacer);

  @media (min-width: ${Breakpoints.MOBILE}) {
    padding: calc(var(--basic-spacer) * 6);
  }
`;

export const TextWrapper = styled.div`
  max-width: var(--container-max-width);
  margin: 0 auto;
`;

export const H2Heading = styled.h2`
  margin-bottom: 1rem;
  font-size: clamp(1.25rem, 1.5rem + 2vw, calc(3rem + 2vmin));
  line-height: 1.3;
  color: var(--primary-text-color);
`;

export const Intro = styled.p`
  max-width: 55ch;
  font-size: clamp(1rem, 0.9rem + 0.8vw, 1.35rem);
  color: var(--primary-text-color);
  line-height: 1.7;
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3rem;

  @media (min-width: ${Breakpoints.MOBILE}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${Breakpoints.DESKTOP}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
