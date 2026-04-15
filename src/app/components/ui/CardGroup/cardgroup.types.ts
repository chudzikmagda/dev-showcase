import { CardData } from "../Card/card.types";

export interface CardGroupProps {
  background: string;
  cards: CardData[];
  title: string;
  cardImageWidth?: string;
  cardImageStyle?: React.CSSProperties;
}
