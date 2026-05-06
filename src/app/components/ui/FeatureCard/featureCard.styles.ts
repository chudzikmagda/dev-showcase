import { breakpoints } from "@/app/shared/styles/breakpoints";
import styled from "styled-components";

export const FeatureCardContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  height: 100%;
  border: 1px solid var(--secondary-color-90);
  border-radius: 16px;
  background:
    radial-gradient(
      circle at top left,
      rgba(255, 255, 255, 0.03),
      transparent 45%
    ),
    linear-gradient(
      160deg,
      rgba(255, 255, 255, 0.02),
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

  > button {
    margin-top: auto;
    margin-bottom: 0;
  }
`;

export const FeatureCardIcon = styled.div`
  margin-bottom: 2rem;
  color: var(--primary-color);

  @media (min-width: ${breakpoints.mobile}) {
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
  font-size: clamp(1.45rem, 1.4rem + 1vw, 2.25rem);
  font-weight: var(--font-weight-bold);
  color: var(--primary-text-color);
  line-height: 1.2;

  @media (min-width: ${breakpoints.mobile}) {
    margin-bottom: 1.25rem;
  }
`;

export const FeatureCardDescription = styled.p`
  max-width: 100%;
  margin-bottom: 1.5rem;
  font-size: clamp(1rem, 0.95rem + 0.2vw, 1.35rem);
  color: var(--secondary-color-20);
  line-height: 1.6;

  @media (min-width: ${breakpoints.mobile}) {
    max-width: 30ch;
    margin-bottom: 2rem;
  }
`;
