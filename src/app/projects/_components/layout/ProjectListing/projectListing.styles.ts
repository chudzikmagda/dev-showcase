import styled from "styled-components";

import { Breakpoints } from "@/shared/types/breakpoints.types";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;

  @media (min-width: ${Breakpoints.MOBILE}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }

  @media (min-width: ${Breakpoints.DESKTOP}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }
`;
