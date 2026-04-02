"use client";
import styled from "styled-components";
import Logotype from "../../ui/Logotype/Logotype";
import MainNavigation from "../MainNavigation/MainNavigation";

const HeaderWrapper = styled.header`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: var(--navbar-height);
  margin: 0 auto;
  padding: var(--basic-spacer);
  z-index: 1;

  @media (min-width: var(--desktop)) {
    padding: 0 calc(var(--basic-spacer) * 4);
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logotype></Logotype>
      <MainNavigation></MainNavigation>
    </HeaderWrapper>
  );
};

export default Header;
