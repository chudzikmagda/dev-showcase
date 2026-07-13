import Image from "next/image";
import styled from "styled-components";

import { Breakpoints } from "@/shared/types/breakpoints.types";

export const ProjectCard = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  color: var(--primary-text-color);

  @media (min-width: ${Breakpoints.DESKTOP}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: stretch;
  }
`;

export const ProjectVisual = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  min-height: 180px;
  overflow: hidden;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background: var(--grey-20);
`;

export const ProjectImage = styled(Image)`
  display: block;
  object-fit: contain;
`;

export const ProjectContent = styled.div`
  width: 100%;
  padding: 2.5rem 0 0;

  @media (min-width: ${Breakpoints.MOBILE}) {
    padding: 3rem;
  }

  @media (min-width: ${Breakpoints.DESKTOP}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 4.5rem 4rem;
  }
`;

export const ProjectTitle = styled.h3`
  margin: 0.5rem 0 1.5rem;
  font-size: clamp(1rem, 1.2rem + 1vw, 2rem);
  font-weight: var(--font-weight-bold);

  @media (min-width: ${Breakpoints.MOBILE}) {
    margin: 3rem 0 2rem;
  }
`;

export const GroupTitle = styled.h6`
  margin-bottom: 1rem;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;

  @media (min-width: ${Breakpoints.MOBILE}) {
    margin-bottom: 2.4rem;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin: 0 0 1rem;

  @media (min-width: ${Breakpoints.MOBILE}) {
    margin: 0 0 2.5rem;
  }
`;
