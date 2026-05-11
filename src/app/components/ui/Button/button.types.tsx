export enum ButtonVersion {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export enum ButtonHtmlType {
  BUTTON = "button",
  SUBMIT = "submit",
  RESET = "reset",
}

export interface ButtonProps {
  label: string;
  version: ButtonVersion;
  hasArrow: boolean;
  href?: string;
  type?: ButtonHtmlType;
  onClick?: () => void;
}
