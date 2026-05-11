import { Link } from "@/app/shared/types/link.types";

export interface SocialMediaMenuLink extends Link {
  iconSrc: string;
}

export interface SocialMediaMenuProps {
  linkTabIndex?: number;
}
