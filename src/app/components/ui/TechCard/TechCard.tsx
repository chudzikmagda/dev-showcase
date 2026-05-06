import type { FC } from "react";
import Tag from "../Tag/Tag";
import { TechCardProps } from "./techCard.types";
import {
  TechCardContainer,
  TechCardTitle,
  TechCardList,
} from "./techCard.styles";

const TechCard: FC<TechCardProps> = ({ title, borderColor, tags }) => {
  return (
    <TechCardContainer $borderColor={borderColor}>
      <TechCardTitle>{title}</TechCardTitle>
      <TechCardList>
        {tags.map((tagData) => (
          <Tag key={`${tagData.label}-${tagData.icon}`} {...tagData} />
        ))}
      </TechCardList>
    </TechCardContainer>
  );
};

export default TechCard;
