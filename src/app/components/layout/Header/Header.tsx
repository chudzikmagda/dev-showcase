"use client";
import Logotype from "../../ui/Logotype/Logotype";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
    </HeaderWrapper>
  );
};

export default Header;
