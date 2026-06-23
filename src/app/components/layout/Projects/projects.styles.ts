import styled from "styled-components";

import { breakpoints } from "@/app/shared/styles/breakpoints";

export const SectionWrapper = styled.section`
  width: 100%;
  background: var(--secondary-color);
  padding: calc(var(--basic-spacer) * 4) var(--basic-spacer);

  @media (min-width: ${breakpoints.mobile}) {
    padding: calc(var(--basic-spacer) * 6);
  }
`;

export const TextWrapper = styled.div`
  max-width: var(--container-max-width);
  margin: 0 auto 2rem;
`;

export const H2Heading = styled.h2`
  margin-bottom: 1rem;
  font-size: clamp(1.25rem, 1.5rem + 2vw, calc(3rem + 2vmin));
  line-height: 1.3;
  color: var(--primary-text-color);
`;

export const SectionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
  max-width: var(--container-max-width);
  margin: 0 auto;
`;
