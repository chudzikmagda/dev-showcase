import type { FC } from "react";
import Card from "../Card/Card";
import { CardAlign } from "../Card/card.types";
import Tag from "../Tag/Tag";
import { TechCardProps } from "./techCard.types";
import { TechCardTitle, TechCardList } from "./techCard.styles";

const TechCard: FC<TechCardProps> = ({ title, tags }) => {
  return (
    <Card align={CardAlign.Start}>
      <TechCardTitle>{title}</TechCardTitle>
      <TechCardList>
        {tags.map((tagData) => (
          <Tag key={`${tagData.label}-${tagData.icon}`} {...tagData} />
        ))}
      </TechCardList>
    </Card>
  );
};

export default TechCard;
