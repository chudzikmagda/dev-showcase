import type { FC } from "react";

import { TagColorMode, TagContentMode } from "@/shared/types/tag.types";

import { TechCardTitle, TechCardList } from "./techCard.styles";
import { TechCardProps } from "./techCard.types";
import Card from "../../../../components/ui/Card/Card";
import { CardAlign } from "../../../../components/ui/Card/card.types";
import Tag from "../../../../components/ui/Tag/Tag";

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
