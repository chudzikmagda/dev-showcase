import styled from "styled-components";

export const SectionWrapper = styled.section`
  display: grid;
  grid-template-columns: 40% 1fr;
  grid-template-areas:
    "content image"
    "stack stack"
    "cta cta";
  align-items: center;
  justify-content: center;
  column-gap: calc(var(--basic-spacer) * 6);
  row-gap: calc(var(--basic-spacer) * 4);
  padding: calc(var(--basic-spacer) * 6);
  background: var(--secondary-color);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: calc(var(--basic-spacer) * 2);
    padding: var(--basic-spacer);
    height: auto;
  }
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
  font-weight: 600;
  line-height: 1.3;
  color: var(--primary-text-color);
`;

export const Paragraph = styled.p`
  font-size: clamp(1rem, 0.9rem + 0.8vw, 1.35rem);
  color: var(--primary-text-color);
  line-height: 1.6;
`;
