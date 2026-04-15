"use client";
import styled from "styled-components";
import Logotype from "../../ui/Logotype/Logotype";
import MainNavigation from "../MainNavigation/MainNavigation";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logotype></Logotype>
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
