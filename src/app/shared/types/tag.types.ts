export enum TagColorMode {
  DARK = "dark",
  LIGHT = "light",
}

export enum TagContentMode {
  ICON_AND_TEXT = "iconAndText",
  TEXT_ONLY = "textOnly",
}

export interface TagData {
  colorMode: TagColorMode;
  contentMode: TagContentMode;
  active?: boolean;
  clickable?: boolean;
  icon?: string;
  label?: string;
  onClick?: () => void;
}
