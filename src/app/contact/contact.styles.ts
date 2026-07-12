import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  padding: var(--navbar-height) var(--basic-spacer) 3rem;
  background-color: var(--secondary-color);
`;

export const H1Heading = styled.h1`
  margin-bottom: 2rem;
  font-size: clamp(1.25rem, 1.5rem + 2vw, calc(3rem + 2vmin));
  line-height: 1.3;
  color: var(--primary-text-color);
`;
