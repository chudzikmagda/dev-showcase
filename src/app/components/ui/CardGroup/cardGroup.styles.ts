import styled from "styled-components";

export const CardGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: var(--cardgroup-bg, transparent);
  padding: 2rem;
`;

export const CardGroupTitle = styled.h3`
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  color: var(--primary-text-color);
`;

export const CardGroupList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2rem;
`;
