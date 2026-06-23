import { ReactNode, CSSProperties } from "react";

export enum CardAlign {
  Start = "start",
  Center = "center",
}

export interface CardProps {
  children: ReactNode;
  align?: CardAlign;
  style?: CSSProperties;
  href?: string;
}
