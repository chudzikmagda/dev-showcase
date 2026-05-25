export enum ButtonVersion {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export enum ButtonSize {
  REGULAR = "regular",
  SMALL = "small",
}

export enum ButtonHtmlType {
  BUTTON = "button",
  SUBMIT = "submit",
  RESET = "reset",
}

export interface ButtonIcon {
  iconUrl: string;
  iconWidth: number;
  iconHeight: number;
}

export interface ButtonProps {
  label: string;
  version: ButtonVersion;
  hasArrow: boolean;
  icon?: ButtonIcon;
  size?: ButtonSize;
  asSpan?: boolean;
  href?: string;
  type?: ButtonHtmlType;
  onClick?: () => void;
}
