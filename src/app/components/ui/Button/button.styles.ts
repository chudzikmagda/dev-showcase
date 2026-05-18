import styled from "styled-components";
import { ButtonSize, ButtonVersion } from "./button.types";

const getButtonColor = (version: ButtonVersion) => {
  switch (version) {
    case ButtonVersion.PRIMARY:
      return "var(--primary-color)";
    case ButtonVersion.SECONDARY:
      return "var(--black)";
    default:
      return undefined;
  }
};

const getHoverColor = (version: ButtonVersion) => {
  switch (version) {
    case ButtonVersion.PRIMARY:
      return "var(--white)";
    case ButtonVersion.SECONDARY:
      return "var(--primary-color)";
    default:
      return undefined;
  }
};

const getButtonFontSize = (size: ButtonSize) => {
  switch (size) {
    case ButtonSize.SMALL:
      return "0.75rem";
    case ButtonSize.REGULAR:
    default:
      return "1rem";
  }
};

const getArrowWidth = (size: ButtonSize) => {
  switch (size) {
    case ButtonSize.SMALL:
      return "6px";
    case ButtonSize.REGULAR:
    default:
      return "8px";
  }
};

const getArrowHeight = (size: ButtonSize) => {
  switch (size) {
    case ButtonSize.SMALL:
      return "16px";
    case ButtonSize.REGULAR:
    default:
      return "22px";
  }
};

export const StyledButton = styled.button<{
  $version: ButtonVersion;
  $hasArrow: boolean;
  $size: ButtonSize;
}>`
  all: unset;
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  margin: 1rem 0;
  font-weight: var(--font-weight-bold);
  font-size: ${({ $size }) => getButtonFontSize($size)};
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
    width: ${({ $size }) => getArrowWidth($size)};
    height: ${({ $size }) => getArrowHeight($size)};
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
