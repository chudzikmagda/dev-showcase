import type { FC, ReactNode } from "react";

import { CardBase } from "./card.styles";
import { CardAlign } from "./card.types";

interface CardProps {
  children: ReactNode;
  align: CardAlign;
  className?: string;
}

const Card: FC<CardProps> = ({ children, className, align }) => {
  return (
    <CardBase className={className} $align={align}>
      {children}
    </CardBase>
  );
};

export default Card;
