import { Link } from "@/shared/types/link.types";

export interface SocialMediaMenuLink extends Link {
  iconSrc: string;
}

export interface SocialMediaMenuProps {
  linkTabIndex?: number;
}
