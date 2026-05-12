export enum TagVariant {
  DARK = "dark",
  LIGHT = "light",
}

export interface TagData {
  icon: string;
  label: string;
  variant?: TagVariant;
}
