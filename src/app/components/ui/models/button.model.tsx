export enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export interface ButtonProps {
  label: string;
  version: ButtonType;
  hasArrow: boolean;
  onClick: () => void;
}
