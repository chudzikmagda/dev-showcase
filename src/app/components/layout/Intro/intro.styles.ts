import styled from "styled-components";

import { breakpoints } from "@/app/shared/styles/breakpoints";

export const SectionWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 40%;
  align-items: center;
  justify-content: center;
  column-gap: calc(var(--basic-spacer) * 8);
  height: 100vh;
  padding: var(--navbar-height);
  background:
    url("/images/bg-section-welcome.svg") center top,
    var(--secondary-color);
  background-size: cover;
  text-align: center;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: calc(var(--basic-spacer) * 2);
    padding: var(--navbar-height) var(--basic-spacer) var(--basic-spacer)
      var(--basic-spacer);
    height: auto;
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
