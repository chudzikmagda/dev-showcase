"use client";
import { JSX } from "react";
import styled from "styled-components";

import { Link } from "@/shared/types/link.types";

import { mainMenuItems } from "../config/mainMenu.config";

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  margin: calc(var(--basic-spacer) * 1.5);
`;

const MenuLink = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  font-size: clamp(1.35rem, 1.4vw + 0.5rem, 4rem);
  line-height: 1.6;
  text-decoration: none;
  color: var(--primary-text-color);
  transition: color 0.3s ease;
  overflow: hidden;

  &:hover {
    color: var(--primary-color);
  }

  &:focus-visible {
    outline-offset: 2px;
    outline: 2px solid var(--primary-color);
    border-radius: 4px;
  }
`;

const Menu = (): JSX.Element => {
  return (
    <MenuList>
      {mainMenuItems.map((item: Link, index: number) => (
        <MenuItem key={index}>
          <MenuLink href={item.href} data-anchor={item.anchor} tabIndex={-1}>
            {item.label}
          </MenuLink>
        </MenuItem>
      ))}
    </MenuList>
  );
};

export default Menu;
