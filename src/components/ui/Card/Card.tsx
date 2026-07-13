import type { FC, JSX } from "react";

import { CardBase, CardLink } from "./card.styles";
import { CardProps } from "./card.types";

const Card: FC<CardProps> = ({ children, align, style, href }) => {
  const content: JSX.Element = (
    <CardBase $align={align} style={style}>
      {children}
    </CardBase>
  );

  return href ? <CardLink href={href}>{content}</CardLink> : content;
};

export default Card;
