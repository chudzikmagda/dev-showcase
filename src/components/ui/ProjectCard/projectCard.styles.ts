import Image from "next/image";
import styled from "styled-components";

import { Breakpoints } from "@/shared/types/breakpoints.types";

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: ${Breakpoints.MOBILE}) {
    gap: 1.5rem;
  }
`;

export const Visual = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  margin-bottom: 2rem;
  z-index: 0;
`;

export const CoverImage = styled(Image)`
  object-fit: cover;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: clamp(1rem, 1.2rem + 0.7vw, 1.3rem);
  font-weight: var(--font-weight-bold);
  color: var(--primary-text-color);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Description = styled.p`
  margin: 0;
  color: var(--secondary-color-20);
  font-size: 1rem;
  line-height: 1.55;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
`;

export const Icons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 0.2rem 0 0;
`;
