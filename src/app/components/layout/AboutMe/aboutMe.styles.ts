import styled from "styled-components";

import { breakpoints } from "@/app/shared/styles/breakpoints";

export const SectionWrapper = styled.section`
  width: 100%;
  background: var(--secondary-color);
`;

export const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "image"
    "content"
    "stack"
    "cta";
  align-items: center;
  justify-content: center;
  column-gap: 0;
  row-gap: calc(var(--basic-spacer) * 2);
  padding: var(--basic-spacer);
  height: auto;
  max-width: var(--container-max-width);
  margin: 0 auto;

  @media (min-width: ${breakpoints.mobile}) {
    grid-template-columns: minmax(300px, 44%) 1fr;
    grid-template-areas:
      "content image"
      "stack stack"
      "cta cta";
    column-gap: calc(var(--basic-spacer) * 6);
    row-gap: calc(var(--basic-spacer) * 4);
    padding: calc(var(--basic-spacer) * 6);
  }
`;

export const ImageWrapper = styled.div`
  grid-area: image;
  width: min(100%, 180px);
  margin: 0 auto;

  @media (min-width: ${breakpoints.mobile}) {
    width: min(100%, 360px);
  }
`;

export const PortraitSvg = styled.svg`
  display: block;
  width: 100%;
  height: auto;
`;

export const ContentWrapper = styled.div`
  grid-area: content;
`;

export const CTAWrapper = styled.div`
  grid-area: cta;
`;

export const StackWrapper = styled.div`
  grid-area: stack;
`;

export const H2Heading = styled.h2`
  margin-bottom: 1rem;
  font-size: clamp(1.25rem, 1.5rem + 2vw, calc(3rem + 2vmin));
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
  color: var(--primary-text-color);
`;

export const ParagraphsWrapper = styled.div`
  display: grid;
  gap: 1rem;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  color: var(--primary-text-color);
  line-height: 1.6;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: clamp(1rem, 0.9rem + 0.8vw, 1.35rem);
  }
`;
