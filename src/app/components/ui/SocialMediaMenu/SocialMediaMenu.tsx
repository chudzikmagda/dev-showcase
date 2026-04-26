"use client";

import Image from "next/image";
import { socialMediaLinks } from "./config/socialMediaLinks.config";
import {
  SocialMediaMenuLink,
  SocialMediaMenuProps,
} from "./socialMediaMenu.types";
import {
  IconWrapper,
  SocialMediaLink,
  SocialMediaMenuWrapper,
} from "./socialMediaMenu.styles";

const SocialMediaMenu = ({ linkTabIndex = -1 }: SocialMediaMenuProps) => (
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
        <IconWrapper>
          <Image src={iconSrc} alt={label} fill priority={label === "GitHub"} />
        </IconWrapper>
      </SocialMediaLink>
    ))}
  </SocialMediaMenuWrapper>
);

export default SocialMediaMenu;
