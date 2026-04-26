import { Link } from "@/app/shared/models/link.types";

export interface SocialMediaMenuLink extends Link {
  iconSrc: string;
}

export interface SocialMediaMenuProps {
  linkTabIndex?: number;
}
