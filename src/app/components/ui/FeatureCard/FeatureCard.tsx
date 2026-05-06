"use client";
import type { FC } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "@/app/components/ui/Button/Button";
import { ButtonType } from "@/app/components/ui/Button/models/button.model";
import { FeatureCardProps } from "./featureCard.types";
import {
  FeatureCardContainer,
  FeatureCardIcon,
  FeatureCardCategory,
  FeatureCardTitle,
  FeatureCardDescription,
} from "./featureCard.styles";

const FeatureCard: FC<FeatureCardProps> = ({
  iconURL,
  category,
  title,
  description,
  link,
}) => {
  const router = useRouter();

  return (
    <FeatureCardContainer>
      <FeatureCardIcon>
        <Image src={iconURL} alt={`${title} icon`} width={64} height={64} />
      </FeatureCardIcon>
      <FeatureCardCategory>{category}</FeatureCardCategory>
      <FeatureCardTitle>{title}</FeatureCardTitle>
      <FeatureCardDescription>{description}</FeatureCardDescription>
      {link && (
        <Button
          label={link.label}
          version={ButtonType.PRIMARY}
          hasArrow={true}
          onClick={() => router.push(link.url)}
        />
      )}
    </FeatureCardContainer>
  );
};

export default FeatureCard;
