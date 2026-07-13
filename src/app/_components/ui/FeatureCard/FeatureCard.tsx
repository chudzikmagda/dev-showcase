"use client";
import Image from "next/image";
import type { FC } from "react";

import {
  FeatureCardCategory,
  FeatureCardDescription,
  FeatureCardIcon,
  FeatureCardTitle,
} from "./featureCard.styles";
import { FeatureCardProps } from "./featureCard.types";
import Button from "../../../../components/ui/Button/Button";
import {
  ButtonSize,
  ButtonVersion,
} from "../../../../components/ui/Button/button.types";
import Card from "../../../../components/ui/Card/Card";
import { CardAlign } from "../../../../components/ui/Card/card.types";

const FeatureCard: FC<FeatureCardProps> = ({
  iconURL,
  category,
  title,
  description,
  link,
}) => {
  return (
    <Card align={CardAlign.Center}>
      <FeatureCardIcon>
        <Image src={iconURL} alt={`${title} icon`} width={64} height={64} />
      </FeatureCardIcon>
      <FeatureCardCategory>{category}</FeatureCardCategory>
      <FeatureCardTitle>{title}</FeatureCardTitle>
      <FeatureCardDescription>{description}</FeatureCardDescription>
      {link && (
        <Button
          label={link.label}
          href={link.url}
          version={ButtonVersion.PRIMARY}
          hasArrow={true}
          size={ButtonSize.SMALL}
        />
      )}
    </Card>
  );
};

export default FeatureCard;
