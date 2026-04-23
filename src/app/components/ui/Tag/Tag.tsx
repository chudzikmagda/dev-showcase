import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../../shared/styles/breakpoints";
import { TagData } from "./tag.types";

export const Tag: React.FC<TagData> = ({ icon, label }) => {
  return (
    <TagWrapper>
      <TagImage src={icon} alt={label} />
      <TagTitle>{label}</TagTitle>
    </TagWrapper>
  );
};

export default Tag;

const TagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 6px 10px;
  background: var(--secondary-color-90);
  border-radius: 24px;

  @media (min-width: ${breakpoints.mobile}) {
    padding: 8px 12px;
  }
`;

const TagImage = styled.img`
  width: 16px;
  height: 16px;
`;

const TagTitle = styled.span`
  font-size: 0.685rem;
  color: var(--primary-text-color);
  letter-spacing: 1px;
`;
