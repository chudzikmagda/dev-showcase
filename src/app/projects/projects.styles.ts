import styled from "styled-components";

export const PageWrapper = styled.div`
  min-height: 100vh;
  padding: var(--navbar-height) var(--basic-spacer) 3rem;
  background-color: var(--secondary-color);
`;

export const H1Heading = styled.h1`
  margin-bottom: 1rem;
  font-size: clamp(1.25rem, 1.5rem + 2vw, calc(3rem + 2vmin));
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
  color: var(--primary-text-color);
`;
