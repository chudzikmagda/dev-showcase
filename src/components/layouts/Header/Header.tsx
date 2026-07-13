"use client";
import { JSX, useEffect, useState } from "react";
import styled from "styled-components";

import MainNavigation from "@/components/layouts/MainNavigation/MainNavigation";
import Logotype from "@/components/ui/Logotype/Logotype";

const Header = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nextIsScrolled = window.scrollY > 0;
      setIsScrolled((prev) =>
        prev !== nextIsScrolled ? nextIsScrolled : prev,
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeaderWrapper>
      <Logotype isScrolled={isScrolled}></Logotype>
      <MainNavigation></MainNavigation>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: var(--navbar-height);
  padding: 0 var(--basic-spacer);
  z-index: 1;
`;
