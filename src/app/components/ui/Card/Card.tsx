import type { FC } from "react";
import Tag from "../Tag/Tag";
import { CardProps } from "./card.types";
import { CardContainer, CardTitle, CardList } from "./card.styles";

const TechCard: FC<CardProps> = ({ title, borderColor, tags }) => {
  return (
    <CardContainer $borderColor={borderColor}>
      <CardTitle>{title}</CardTitle>
      <CardList>
        {tags.map((tagData) => (
          <Tag key={`${tagData.label}-${tagData.icon}`} {...tagData} />
        ))}
      </CardList>
    </CardContainer>
  );
};

export default TechCard;
