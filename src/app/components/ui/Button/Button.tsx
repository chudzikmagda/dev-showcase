"use client";
import Link from "next/link";
import { JSX } from "react";

import { StyledButton } from "./button.styles";
import { ButtonHtmlType, ButtonProps, ButtonSize } from "./button.types";
import Icon from "../Icon/Icon";

const Button = ({
  label,
  version,
  hasArrow,
  icon,
  size = ButtonSize.REGULAR,
  asSpan,
  href,
  type = ButtonHtmlType.BUTTON,
  onClick,
  disabled,
}: ButtonProps): JSX.Element => {
  const content = (
    <>
      {icon?.iconUrl ? (
        <Icon
          iconUrl={icon.iconUrl}
          width={icon.width ?? 16}
          height={icon.height ?? 16}
          alt={label}
        />
      ) : null}
      {label}
    </>
  );

  const commonProps = {
    $version: version,
    $hasArrow: hasArrow,
    $size: size,
    children: content,
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

  return (
    <StyledButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...commonProps}
    />
  );
};

export default Button;
