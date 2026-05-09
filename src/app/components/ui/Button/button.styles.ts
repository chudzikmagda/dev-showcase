import styled from "styled-components";
import { ButtonType } from "./button.types";

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

const sharedStyles = (version: ButtonType, hasArrow: boolean) => `
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
  color: ${getButtonColor(version)};
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
    display: ${hasArrow ? "inline-block" : "none"};
    background-color: ${getButtonColor(version)};
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
    color: ${getHoverColor(version)};

    &::after {
      background-color: ${getHoverColor(version)};
    }
  }

  &:focus-visible {
    outline: 2px solid ${getHoverColor(version)};
    outline-offset: 2px;
  }
`;

export const ButtonWrapper = styled.button<{
  $version: ButtonType;
  $hasArrow: boolean;
}>`
  ${({ $version, $hasArrow }) => sharedStyles($version, $hasArrow)}
`;

export const LinkWrapper = styled.a<{
  $version: ButtonType;
  $hasArrow: boolean;
}>`
  ${({ $version, $hasArrow }) => sharedStyles($version, $hasArrow)}
`;
