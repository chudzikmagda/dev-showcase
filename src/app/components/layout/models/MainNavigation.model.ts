export enum ButtonVersion {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}
export interface HamburgerIconProps {
  active: boolean;
  version: ButtonVersion;
  onClick: () => void;
}
