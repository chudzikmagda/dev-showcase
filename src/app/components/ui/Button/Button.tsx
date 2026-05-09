"use client";
import { ButtonProps } from "./button.types";
import { ButtonWrapper, LinkWrapper } from "./button.styles";

const Button = ({ label, version, hasArrow, onClick, href }: ButtonProps) => {
  if (href) {
    return (
      <LinkWrapper
        $version={version}
        $hasArrow={hasArrow}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </LinkWrapper>
    );
  }

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
