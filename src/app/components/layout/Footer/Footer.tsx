"use client";

import { JSX } from "react";

import GoToTop from "@/app/components/ui/GoToTop/GoToTop";
import SocialMediaMenu from "@/app/components/ui/SocialMediaMenu/SocialMediaMenu";

import {
  Copyright,
  FooterWrapper,
  SocialMediaHeading,
  SocialMediaWrapper,
} from "./footer.styles";

const Footer = (): JSX.Element => {
  return (
    <FooterWrapper id="contact">
      <SocialMediaWrapper>
        <SocialMediaHeading>Meet me here:</SocialMediaHeading>
        <SocialMediaMenu />
      </SocialMediaWrapper>

      <GoToTop />

      <Copyright>&copy; Copyright Magda Chudzik</Copyright>
    </FooterWrapper>
  );
};

export default Footer;
