import styled from "styled-components";

import { breakpoints } from "@/app/shared/styles/breakpoints";

export const GoTopButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3.15rem;
  margin: calc(var(--basic-spacer) * 2) 0;
  border: 0;
  background: transparent;
  font-size: 0.75rem;
  font-weight: var(--font-weight-bold);
  color: var(--primary-color);
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: var(--transition-default);

  @media (min-width: ${breakpoints.desktop}) {
    position: absolute;
    top: 50%;
    right: 5rem;
    transform: translateY(-50%);
    margin: 0;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    width: 14px;
    height: 52px;
    background-color: var(--primary-color);
    mask-image: url("/images/bracets/arrow-next.svg");
    mask-position: center;
    mask-repeat: no-repeat;
    mask-size: 14px 52px;
    -webkit-mask-image: url("/images/bracets/arrow-next.svg");
    -webkit-mask-position: center;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 14px 52px;
    transform: rotate(270deg);
    transition: var(--transition-default);
  }

  &:hover,
  &:focus-visible {
    color: var(--white);
  }

  &:hover::before,
  &:focus-visible::before {
    background-color: var(--white);
    transform: rotate(270deg) translateX(0.35rem);
  }

  &:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 4px;
  }
`;
