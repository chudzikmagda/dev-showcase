import { IconProps } from "../Icon/icon.types";

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

export interface ButtonProps {
  label: string;
  version: ButtonVersion;
  hasArrow: boolean;
  icon?: IconProps;
  size?: ButtonSize;
  asSpan?: boolean;
  href?: string;
  type?: ButtonHtmlType;
  onClick?: () => void;
  disabled?: boolean;
}
