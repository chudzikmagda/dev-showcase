"use client";
import React from "react";
import styled from "styled-components";

const LogotypeWrapper = styled.span`
  position: relative;
`;

const HomepageLink = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: var(--font-size-basic);
  font-family: var(--font-family-basic);
  font-weight: var(--font-bold);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--primary-color);
  transition: letter-spacing 0.5s;

  &::before {
    content: url("/images/bracets/arrow-before-small.svg");
    padding-right: 8px;
    transition: padding-right 0.5s;
  }

  &::after {
    content: url("/images/bracets/arrow-next-small.svg");
    padding-left: 8px;
    transition: padding-left 0.5s;
  }

  &:hover {
    letter-spacing: 1.5px;

    &::before {
      padding-right: var(--basic-spacer);
    }
    &::after {
      padding-left: var(--basic-spacer);
    }
  }
`;

const Logotype: React.FC = () => (
  <LogotypeWrapper>
    <HomepageLink href="/" tabIndex={1}>
      Magda Chudzik
    </HomepageLink>
  </LogotypeWrapper>
);

export default Logotype;
