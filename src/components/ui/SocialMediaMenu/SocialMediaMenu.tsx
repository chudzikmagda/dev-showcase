"use client";
import { JSX } from "react";

import Icon from "@/components/ui/Icon/Icon";

import { socialMediaLinks } from "./config/socialMediaLinks.config";
import {
  SocialMediaLink,
  SocialMediaMenuWrapper,
} from "./socialMediaMenu.styles";
import {
  SocialMediaMenuLink,
  SocialMediaMenuProps,
} from "./socialMediaMenu.types";

const SocialMediaMenu = ({
  linkTabIndex = 0,
}: SocialMediaMenuProps): JSX.Element => (
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
