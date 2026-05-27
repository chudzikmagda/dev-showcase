import type { FC } from "react";

import { TagColorMode, TagContentMode } from "@/app/shared/types/tag.types";

import { TechCardTitle, TechCardList } from "./techCard.styles";
import { TechCardProps } from "./techCard.types";
import Card from "../Card/Card";
import { CardAlign } from "../Card/card.types";
import Tag from "../Tag/Tag";

const TechCard: FC<TechCardProps> = ({ title, tags }) => {
  return (
    <Card align={CardAlign.Start}>
      <TechCardTitle>{title}</TechCardTitle>
      <TechCardList>
        {tags.map((tagData) => (
          <Tag
            key={`${tagData.label}-${tagData.icon}`}
            colorMode={TagColorMode.DARK}
            contentMode={TagContentMode.ICON_AND_TEXT}
            label={tagData.label}
            icon={tagData.icon}
          />
        ))}
      </TechCardList>
    </Card>
  );
};

export default TechCard;
