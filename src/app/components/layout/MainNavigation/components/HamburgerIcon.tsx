"use client";
import styled from "styled-components";

import { breakpoints } from "@/app/shared/styles/breakpoints";

import { HamburgerIconProps } from "../models/MainNavigation.model";

const HamburgerButton = styled.button`
  position: relative;
  width: calc(var(--navbar-height) * 0.7);
  height: var(--navbar-height);
  margin-top: 4px;
  background: none;
  border: 0;
  outline: none;
  overflow: hidden;
  z-index: 1;

  @media (min-width: ${breakpoints.desktop}) {
    width: var(--navbar-height);
  }

  &:hover {
    cursor: pointer;
    span {
      background-color: var(--white);
    }
  }

  &:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 0;
  }

  &.hamburger-icon--active {
    .hamburger-icon__item--first {
      top: 50%;
      transform: rotate(135deg) translateY(-50%);
    }

    .hamburger-icon__item--second {
      right: -100%;
    }

    .hamburger-icon__item--third {
      bottom: 50%;
      transform: rotate(-135deg) translateY(-50%);
    }
  }
`;

const HamburgerItem = styled.span`
  position: absolute;
  right: 0;
  height: 2px;
  width: 100%;
  background: var(--primary-color);
  transition: all 0.3s;

  &.hamburger-icon__item--first {
    top: 20px;
  }

  &.hamburger-icon__item--second {
    top: 50%;
    right: 0;
    width: 60%;
  }

  &.hamburger-icon__item--third {
    bottom: 19px;
  }
`;

const HamburgerIcon = ({
  active,
  onClick,
}: HamburgerIconProps): JSX.Element => {
  return (
    <HamburgerButton
      onClick={onClick}
      className={`hamburger-icon${active ? " hamburger-icon--active" : ""}`}
      tabIndex={2}
      aria-label="Open menu"
    >
      <HamburgerItem className="hamburger-icon__item hamburger-icon__item--first" />
      <HamburgerItem className="hamburger-icon__item hamburger-icon__item--second" />
      <HamburgerItem className="hamburger-icon__item hamburger-icon__item--third" />
    </HamburgerButton>
  );
};

export default HamburgerIcon;
