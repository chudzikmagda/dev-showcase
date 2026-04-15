import React from "react";
import styled from "styled-components";
import { CardData } from "./card.types";

export const Card: React.FC<CardData> = ({
  imageSrc,
  title,
  imageWidth,
  imageStyle,
}) => {
  return (
    <CardWrapper>
      <CardImage
        src={imageSrc}
        alt={title}
        $imageWidth={imageWidth}
        style={imageStyle}
      />
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardImage = styled.img<{ $imageWidth?: string }>`
  width: 100%;
  max-width: ${({ $imageWidth }) => $imageWidth || "100%"};
  margin-bottom: 8px;
`;

const CardTitle = styled.h6`
  font-size: 0.6875rem;
  font-weight: var(--font-weight-bold);
  color: var(--primary-text-color);
  text-align: center;
`;
