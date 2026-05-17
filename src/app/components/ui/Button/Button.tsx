"use client";
import Link from "next/link";
import { ButtonHtmlType, ButtonProps, ButtonSize } from "./button.types";
import { StyledButton } from "./button.styles";

const Button = ({
  label,
  version,
  hasArrow,
  size = ButtonSize.Regular,
  asSpan = false,
  href,
  type = ButtonHtmlType.BUTTON,
  onClick,
}: ButtonProps) => {
  const commonProps = {
    $version: version,
    $hasArrow: hasArrow,
    $size: size,
    children: label,
  };

  if (asSpan) {
    return <StyledButton as="span" {...commonProps} />;
  }

  if (href) {
    const isInternal: boolean = href.startsWith("/") || href.startsWith("#");

    return isInternal ? (
      <StyledButton as={Link} href={href} {...commonProps} />
    ) : (
      <StyledButton
        as="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...commonProps}
      />
    );
  }

  return <StyledButton type={type} onClick={onClick} {...commonProps} />;
};

export default Button;
