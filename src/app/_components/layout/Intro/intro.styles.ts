import styled from "styled-components";

import { Breakpoints } from "@/shared/types/breakpoints.types";

export const SectionWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  column-gap: 0;
  row-gap: calc(var(--basic-spacer) * 2);
  padding: var(--navbar-height) var(--basic-spacer) var(--basic-spacer)
    var(--basic-spacer);
  height: auto;
  background-image: url("/images/bg-section-welcome.svg");
  background-position: center bottom;
  background-repeat: no-repeat;
  background-color: var(--secondary-color);
  background-size: cover;
  text-align: center;
  box-sizing: border-box;

  @media (min-width: ${Breakpoints.MOBILE}) {
    grid-template-columns: 1fr 40%;
    column-gap: calc(var(--basic-spacer) * 8);
    height: 100vh;
    padding: var(--navbar-height) 0;
  }

  > div {
    padding: var(--basic-spacer);
  }
`;

export const H1Heading = styled.h1`
  margin-bottom: 1rem;
  font-size: clamp(1.25rem, 1.5rem + 2vw, calc(3rem + 2vmin));
  font-weight: 600;
  line-height: 1.3;
  color: var(--primary-text-color);
`;

export const H3Heading = styled.h3`
  margin-bottom: 1rem;
  font-size: clamp(1rem, 0.9rem + 0.8vw, 1.35rem);
  font-weight: 600;
  color: var(--primary-color);
  letter-spacing: 1px;
  text-transform: uppercase;
`;
