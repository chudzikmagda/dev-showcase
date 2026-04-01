"use client";

import Image from "next/image";
import styled from "styled-components";
import { socialMediaLinks } from "./config/socialMediaLinks.config";
import { SocialMediaMenuLink } from "../models/socialMediaMenu.model";

const SocialMediaMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  width: clamp(300px, 50%, 40%);
`;

const SocialMediaLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  transition: all 0.4s ease;
  opacity: 0.4;

  &:hover {
    transform: scale(1.2);
    opacity: 0.8;
  }
`;

const IconWrapper = styled.div`
  position: relative;
  height: 32px;
  width: 32px;
`;

const SocialMediaMenu = () => (
  <SocialMediaMenuWrapper>
    {socialMediaLinks.map(({ label, href, iconSrc }: SocialMediaMenuLink) => (
      <SocialMediaLink
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
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
