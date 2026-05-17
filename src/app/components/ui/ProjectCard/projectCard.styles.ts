import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { breakpoints } from "@/app/shared/styles/breakpoints";

export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  border-radius: 16px;
  text-decoration: none;
  color: inherit;
  background:
    radial-gradient(
      circle at top left,
      rgba(255, 255, 255, 0.03),
      transparent 45%
    ),
    linear-gradient(
      160deg,
      rgba(255, 255, 255, 0.02),
      rgba(255, 255, 255, 0.01)
    );
  border: 1px solid var(--secondary-color-90);
  transition:
    transform var(--transition-default),
    border-color var(--transition-default);

  &:hover,
  &:focus-visible {
    transform: translateY(-4px);
    border-color: var(--primary-color);
  }

  &:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }
`;

export const Visual = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
`;

export const MainTagWrapper = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 2;
`;

export const CoverImage = styled(Image)`
  object-fit: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem 1.3rem 1.6rem;

  @media (min-width: ${breakpoints.mobile}) {
    gap: 1.1rem;
    padding: 1.8rem;
  }
`;

export const Title = styled.h3`
  margin: 0;
  font-size: clamp(1rem, 1.2rem + 0.7vw, 1.3rem);
  font-weight: var(--font-weight-bold);
  color: var(--primary-text-color);
`;

export const Description = styled.p`
  margin: 0;
  color: var(--secondary-color-20);
  font-size: 1rem;
  line-height: 1.55;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.2rem 0 0;
`;

export const Footer = styled.div`
  margin-top: 0.35rem;
`;
