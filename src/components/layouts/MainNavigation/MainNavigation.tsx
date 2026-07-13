"use client";
import React, { JSX, useState } from "react";
import styled from "styled-components";

import HamburgerIcon from "./components/HamburgerIcon";
import Menu from "./components/Menu";
import SocialMediaMenu from "../../ui/SocialMediaMenu/SocialMediaMenu";

const Overlay = styled.div`
  display: none;

  &.active {
    position: absolute;
    top: 0;
    right: -100%;
    display: block;
    right: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(var(--secondary-color-rgb), 0.8);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: right 0.6s;
    transition-delay: 0.25s;
  }
`;

const MenuContainer = styled.nav`
  position: absolute;
  top: 0;
  right: -100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100vh;
  transition: right 0.3s ease-out;

  &.active {
    right: 0;
  }
`;

const MainNavigation = (): JSX.Element => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = (): void =>
    setIsActive((activeState: boolean) => !activeState);

  return (
    <>
      <HamburgerIcon active={isActive} onClick={toggleMenu} />
      <Overlay className={isActive ? "active" : ""} />
      <MenuContainer className={isActive ? "active" : ""}>
        <Menu />
        <SocialMediaMenu linkTabIndex={isActive ? 0 : -1} />
      </MenuContainer>
    </>
  );
};

export default MainNavigation;
