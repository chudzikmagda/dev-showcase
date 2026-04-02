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
  gap: 8px;
  font-size: var(--font-size-basic);
  font-family: var(--font-family-basic);
  font-weight: var(--font-weight-bold);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0;
  color: var(--primary-color);
  transition:
    gap var(--transition-default),
    letter-spacing var(--transition-default);

  &::before {
    content: "";
    display: inline-block;
    width: 8px;
    height: 22px;
    background-color: var(--primary-color);
    mask-image: url("/images/bracets/arrow-before-small.svg");
    mask-repeat: no-repeat;
    mask-size: contain;
    -webkit-mask-image: url("/images/bracets/arrow-before-small.svg");
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: contain;
  }

  &::after {
    content: "";
    display: inline-block;
    width: 8px;
    height: 22px;
    background-color: var(--primary-color);
    mask-image: url("/images/bracets/arrow-next-small.svg");
    mask-repeat: no-repeat;
    mask-size: contain;
    -webkit-mask-image: url("/images/bracets/arrow-next-small.svg");
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: contain;
  }

  &:hover {
    letter-spacing: 1px;
    gap: 10px;
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
