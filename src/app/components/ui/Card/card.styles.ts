import { breakpoints } from "@/app/shared/styles/breakpoints";
import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 2px solid var(--border-color, transparent);
  border-radius: 8px;
  padding: 1rem;
  height: 100%;

  @media (min-width: ${breakpoints.mobile}) {
    padding: 1.5rem;
  }
`;

export const CardTitle = styled.h4`
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: var(--font-weight-bold);
  color: var(--primary-text-color);
  line-height: 1.2;
`;

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  width: 100%;
`;
