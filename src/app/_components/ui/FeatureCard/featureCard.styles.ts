import styled from "styled-components";

import { Breakpoints } from "@/shared/types/breakpoints.types";

export const FeatureCardIcon = styled.div`
  margin-bottom: 2rem;
  color: var(--primary-color);

  @media (min-width: ${Breakpoints.MOBILE}) {
    margin-bottom: 3rem;
  }
`;

export const FeatureCardCategory = styled.span`
  margin-bottom: 1rem;
  font-size: 0.6875rem;
  font-weight: var(--font-weight-medium);
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--primary-color);
`;

export const FeatureCardTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: clamp(1.2rem, 1.2rem + 1vw, 2rem);
  color: var(--primary-text-color);
  line-height: 1.2;

  @media (min-width: ${Breakpoints.MOBILE}) {
    margin-bottom: 1.25rem;
  }
`;

export const FeatureCardDescription = styled.p`
  max-width: 100%;
  margin-bottom: 1.5rem;
  font-size: clamp(1rem, 0.95rem + 0.2vw, 1.35rem);
  color: var(--secondary-color-20);
  line-height: 1.6;

  @media (min-width: ${Breakpoints.MOBILE}) {
    max-width: 30ch;
    margin-bottom: 2rem;
  }
`;
