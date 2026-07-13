import styled from "styled-components";

import { Breakpoints } from "../../../../../shared/types/breakpoints.types";

export const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  background:
    url("/images/bg-section-welcome.svg") center top,
    var(--primary-background-color);
  background-size: cover;
  padding: 8rem 1rem;
`;

export const TagsRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  @media (min-width: ${Breakpoints.MOBILE}) {
    margin-bottom: 8rem;
  }
`;

export const Title = styled.h2`
  margin: 2rem 0;
  font-size: clamp(1.25rem, 1.5rem + 2vw, calc(3rem + 2vmin));
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
  color: var(--primary-text-color);
  text-align: center;
`;

export const ShowcaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ShowcaseImageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ShowcaseImageFrame = styled.div`
  width: 100%;
  overflow: hidden;
  border: 1px solid var(--secondary-color-60);
  border-radius: 8px;
`;

export const ShowcaseLabel = styled.div`
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--info-text-color);
`;

export const ImagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  width: 100%;
`;

export const ImplementationDate = styled.div`
  margin: 1.5rem 0 0.5rem 0;
  color: var(--info-text-color);
  font-size: clamp(1rem, 1.1rem + 0.5vw, 1.5rem);
`;

export const ShowcaseDescription = styled.div`
  max-width: 60ch;
  color: var(--primary-text-color);
  font-size: clamp(1rem, 1.1rem + 0.5vw, 1.5rem);
  text-align: center;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 3rem 0 0;
  color: var(--primary-text-color);
`;

export const InfoLabel = styled.span`
  display: inline-block;
  margin-bottom: 0.5rem;
  color: var(--info-text-color);
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
