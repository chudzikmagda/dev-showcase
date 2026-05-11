import Image from "next/image";
import styled from "styled-components";
import { breakpoints } from "@/app/shared/styles/breakpoints";

export const ProjectCard = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;

  @media (min-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: stretch;
  }
`;

export const ProjectVisual = styled.div<{ $imagePosition?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 16px;
  background: var(--grey-20);

  @media (min-width: ${breakpoints.desktop}) {
    order: ${({ $imagePosition }) => ($imagePosition === "right" ? 2 : 0)};
  }
`;

export const ProjectImage = styled(Image)`
  width: 100%;
  height: auto;
  display: block;
`;

export const CaseStudyLabel = styled.p`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--primary-color);

  &::before {
    content: "";
    display: inline-block;
    width: 2rem;
    height: 2px;
    background: var(--primary-color);
  }
`;

export const ProjectContent = styled.div`
  padding: 2.5rem 1.5rem;

  @media (min-width: ${breakpoints.mobile}) {
    padding: 3rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    padding: 4.5rem 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 540px;
    margin: 0 auto;
  }
`;

export const ProjectTitle = styled.h3`
  margin: 3rem 0 1rem;
  color: var(--secondary-text-color);
  font-size: clamp(1.7rem, 1.2rem + 1vw, 2rem);
  font-weight: var(--font-weight-bold);
`;

export const ProjectDescription = styled.p`
  color: var(--secondary-text-color);
  font-size: clamp(1rem, 0.95rem + 0.25vw, 1.45rem);
  line-height: 1.55;
  max-width: 30ch;
  margin-bottom: 2rem;
`;

export const GroupTitle = styled.h6`
  margin-bottom: 0.4rem;
  color: var(--secondary-text-color);
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const GroupText = styled.p`
  margin-bottom: 1.8rem;
  color: var(--secondary-text-color);
  font-size: 1rem;
  line-height: 1.5;
`;

export const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2.4rem;
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2.5rem;
`;
