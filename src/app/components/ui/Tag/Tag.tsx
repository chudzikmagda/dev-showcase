import type { FC } from "react";
import styled from "styled-components";
import { breakpoints } from "@/app/shared/styles/breakpoints";
import { TagData, TagVariant } from "../../../shared/types/tag.types";

export const Tag: FC<TagData> = ({ icon, label, variant }) => {
  return (
    <TagWrapper $variant={variant}>
      <TagImage src={icon} alt={label} />
      <TagTitle $variant={variant}>{label}</TagTitle>
    </TagWrapper>
  );
};

export default Tag;

const TagWrapper = styled.div<{ $variant?: TagVariant }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 6px 10px;
  background: ${({ $variant }) =>
    $variant === TagVariant.LIGHT
      ? "var(--grey-20)"
      : "var(--secondary-color-90)"};
  border-radius: 24px;

  @media (min-width: ${breakpoints.mobile}) {
    padding: 8px 12px;
  }
`;

const TagImage = styled.img`
  width: 16px;
  height: 16px;
`;

const TagTitle = styled.span<{ $variant?: TagVariant }>`
  font-size: 0.685rem;
  color: ${({ $variant }) =>
    $variant === TagVariant.LIGHT
      ? "var(--secondary-text-color)"
      : "var(--primary-text-color)"};
  letter-spacing: 1px;
`;
