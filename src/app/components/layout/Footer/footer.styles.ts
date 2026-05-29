import styled from "styled-components";

import { breakpoints } from "@/app/shared/styles/breakpoints";

export const FooterWrapper = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
  padding: calc(var(--basic-spacer) * 2) var(--basic-spacer);
  background: var(--secondary-color);
  color: var(--white);

  @media (min-width: ${breakpoints.desktop}) {
    min-height: 50vh;
  }
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SocialMediaHeading = styled.h6`
  width: 100%;
  margin: 0 0 2rem;
  text-align: center;
  font-size: 1rem;
  font-weight: var(--font-weight-bold);
  color: var(--secondary-color-10);
`;

export const Copyright = styled.span`
  display: block;
  width: 100%;
  margin-top: 2rem;
  text-align: center;
  font-size: 0.85rem;
  color: var(--secondary-color-10);

  @media (min-width: ${breakpoints.desktop}) {
    margin-top: 4rem;
    font-size: 0.75rem;
  }
`;
