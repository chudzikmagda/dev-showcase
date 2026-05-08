"use client";
import type { FC } from "react";
import Image from "next/image";
import Card from "../Card/Card";
import { CardAlign } from "../Card/card.types";
import { FeatureCardProps } from "./featureCard.types";
import {
  FeatureCardIcon,
  FeatureCardCategory,
  FeatureCardTitle,
  FeatureCardDescription,
  FeatureCardLink,
} from "./featureCard.styles";

const FeatureCard: FC<FeatureCardProps> = ({
  iconURL,
  category,
  title,
  description,
  link,
}) => {
  const isExternalLink = link?.url.startsWith("http");

  return (
    <Card align={CardAlign.Center}>
      <FeatureCardIcon>
        <Image src={iconURL} alt={`${title} icon`} width={64} height={64} />
      </FeatureCardIcon>
      <FeatureCardCategory>{category}</FeatureCardCategory>
      <FeatureCardTitle>{title}</FeatureCardTitle>
      <FeatureCardDescription>{description}</FeatureCardDescription>
      {link && (
        <FeatureCardLink
          href={link.url}
          target={isExternalLink ? "_blank" : undefined}
          rel={isExternalLink ? "noopener noreferrer" : undefined}
        >
          {link.label}
        </FeatureCardLink>
      )}
    </Card>
  );
};

export default FeatureCard;
