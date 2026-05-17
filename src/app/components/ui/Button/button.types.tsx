export enum ButtonVersion {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export enum ButtonSize {
  Regular = "regular",
  Small = "small",
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
  size?: ButtonSize;
  asSpan?: boolean;
  href?: string;
  type?: ButtonHtmlType;
  onClick?: () => void;
}
