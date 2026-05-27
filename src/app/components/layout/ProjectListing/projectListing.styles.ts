import styled from "styled-components";

import { breakpoints } from "@/app/shared/styles/breakpoints";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;

  @media (min-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }
`;
