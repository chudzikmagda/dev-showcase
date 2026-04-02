"use client";
import styled from "styled-components";
import { ButtonProps, ButtonType } from "../models/button.model";

const getButtonColor = (version: ButtonType) => {
  switch (version) {
    case ButtonType.PRIMARY:
      return "var(--primary-color)";
    case ButtonType.SECONDARY:
      return "var(--black)";
    default:
      return undefined;
  }
};

const getHoverColor = (version: ButtonType) => {
  switch (version) {
    case ButtonType.PRIMARY:
      return "var(--white)";
    case ButtonType.SECONDARY:
      return "var(--primary-color)";
    default:
      return undefined;
  }
};

const ButtonWrapper = styled.button<{
  $version: ButtonType;
  $hasArrow: boolean;
}>`
  all: unset;
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  margin: 1rem 0;
  font-weight: var(--font-weight-bold);
  font-size: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${({ $version }) => getButtonColor($version)};
  text-decoration: none;
  line-height: 1.25;
  transition:
    color var(--transition-default),
    transform var(--transition-default);
  cursor: pointer;

  &::after {
    content: "";
    width: 8px;
    height: 22px;
    display: ${({ $hasArrow }) => ($hasArrow ? "inline-block" : "none")};
    background-color: ${({ $version }) => getButtonColor($version)};
    mask-image: url("/images/bracets/arrow-next-small.svg");
    mask-repeat: no-repeat;
    mask-size: contain;
    -webkit-mask-image: url("/images/bracets/arrow-next-small.svg");
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: contain;
    transition: background-color var(--transition-default);
  }

  &:hover {
    transform: scale(1.05);
  }

  &:hover,
  &:focus-visible {
    color: ${({ $version }) => getHoverColor($version)};

    &::after {
      background-color: ${({ $version }) => getHoverColor($version)};
    }
  }

  &:focus-visible {
    outline: 2px solid ${({ $version }) => getHoverColor($version)};
    outline-offset: 2px;
  }
`;

const Button = ({ label, version, hasArrow, onClick }: ButtonProps) => {
  return (
    <ButtonWrapper
      $version={version}
      $hasArrow={hasArrow}
      type="button"
      onClick={onClick}
    >
      {label}
    </ButtonWrapper>
  );
};

export default Button;
