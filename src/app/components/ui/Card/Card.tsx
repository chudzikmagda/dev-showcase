import React from "react";
import Tag from "../Tag/Tag";
import { CardProps } from "./card.types";
import { CardContainer, CardTitle, CardList } from "./card.styles";

const Card: React.FC<CardProps> = ({ title, borderColor, tags }) => {
  return (
    <CardContainer style={{ "--border-color": borderColor }}>
      <CardTitle>{title}</CardTitle>
      <CardList>
        {tags.map((tagData, index) => (
          <Tag key={index} {...tagData} />
        ))}
      </CardList>
    </CardContainer>
  );
};

export default Card;
