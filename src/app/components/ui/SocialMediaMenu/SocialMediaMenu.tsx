"use client";
import Icon from "../Icon/Icon";
import { socialMediaLinks } from "./config/socialMediaLinks.config";
import {
  SocialMediaMenuLink,
  SocialMediaMenuProps,
} from "./socialMediaMenu.types";
import {
  SocialMediaLink,
  SocialMediaMenuWrapper,
} from "./socialMediaMenu.styles";

const SocialMediaMenu = ({ linkTabIndex = 0 }: SocialMediaMenuProps) => (
  <SocialMediaMenuWrapper>
    {socialMediaLinks.map(({ label, href, iconSrc }: SocialMediaMenuLink) => (
      <SocialMediaLink
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={linkTabIndex}
        aria-label={label}
      >
        <Icon iconUrl={iconSrc} alt={label} width={32} height={32} />
      </SocialMediaLink>
    ))}
  </SocialMediaMenuWrapper>
);

export default SocialMediaMenu;
