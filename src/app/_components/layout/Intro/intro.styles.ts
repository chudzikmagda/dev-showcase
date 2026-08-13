import styled from "styled-components";

import { Breakpoints } from "@/shared/types/breakpoints.types";

export const SectionWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-content: center;
  row-gap: calc(var(--basic-spacer) * 2);
  height: calc(100vh - var(--navbar-height));
  padding: var(--navbar-height) var(--basic-spacer) var(--basic-spacer)
    var(--basic-spacer);
  background: var(--secondary-color) url("/images/bg-section-welcome.svg")
    center bottom / cover no-repeat;
  text-align: center;
  box-sizing: border-box;

  @media (min-width: ${Breakpoints.MOBILE}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    column-gap: calc(var(--basic-spacer) * 6);
    padding: var(--navbar-height);
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
  width: 100%;
  max-width: 18ch;
  margin-left: auto;
  margin-right: auto;
`;

export const H3Heading = styled.h3`
  margin-bottom: 1rem;
  font-size: clamp(1rem, 0.9rem + 0.8vw, 1.35rem);
  font-weight: 600;
  color: var(--primary-color);
  letter-spacing: 1px;
  text-transform: uppercase;
`;
