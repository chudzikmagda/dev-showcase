import React from "react";
import Card from "../Card/Card";
import { CardGroupProps } from "./cardgroup.types";
import {
  CardGroupContainer,
  CardGroupTitle,
  CardGroupList,
} from "./cardGroup.styles";

const CardGroup: React.FC<CardGroupProps> = ({
  title,
  background,
  cards,
  cardImageWidth,
  cardImageStyle,
}) => {
  return (
    <CardGroupContainer style={{ "--cardgroup-bg": background }}>
      <CardGroupTitle>{title}</CardGroupTitle>
      <CardGroupList>
        {cards.map((cardData, index) => (
          <Card
            key={index}
            {...cardData}
            imageWidth={cardImageWidth}
            imageStyle={cardImageStyle}
          />
        ))}
      </CardGroupList>
    </CardGroupContainer>
  );
};

export default CardGroup;
