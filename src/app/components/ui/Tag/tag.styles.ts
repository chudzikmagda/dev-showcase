import styled, { css } from "styled-components";
import { breakpoints } from "@/app/shared/styles/breakpoints";
import { TagColorMode } from "@/app/shared/types/tag.types";

type TagStyleProps = {
  $colorMode?: TagColorMode;
  $active?: boolean;
};

const tagStyles = css<TagStyleProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 6px 10px;
  border: 1px solid
    ${({ $active }) => ($active ? "var(--primary-color)" : "transparent")};
  background: ${({ $colorMode }) =>
    $colorMode === TagColorMode.LIGHT
      ? "var(--grey-20)"
      : "var(--secondary-color-90)"};
  border-radius: 24px;

  @media (min-width: ${breakpoints.mobile}) {
    padding: 8px 12px;
  }
`;

export const TagWrapper = styled.div<TagStyleProps>`
  ${tagStyles}
`;

export const TagButton = styled.button<TagStyleProps>`
  ${tagStyles}
  cursor: pointer;

  border-color: ${({ $active }) =>
    $active ? "var(--primary-color)" : "transparent"};
  background: ${({ $active, $colorMode }) =>
    $active
      ? "var(--primary-color)"
      : $colorMode === TagColorMode.LIGHT
        ? "var(--grey-20)"
        : "var(--secondary-color-90)"};

  &:hover,
  &:focus-visible {
    border-color: var(--primary-color);
  }

  &:focus-visible {
    outline: none;
  }
`;

export const TagTitle = styled.span<{ $colorMode?: TagColorMode }>`
  font-size: 0.685rem;
  color: ${({ $colorMode }) =>
    $colorMode === TagColorMode.LIGHT
      ? "var(--secondary-text-color)"
      : "var(--primary-text-color)"};
  letter-spacing: 1px;
`;
