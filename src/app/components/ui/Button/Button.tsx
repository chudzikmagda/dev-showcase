"use client";
import Link from "next/link";
import Icon from "../Icon/Icon";
import { ButtonHtmlType, ButtonProps, ButtonSize } from "./button.types";
import { StyledButton } from "./button.styles";

const Button = ({
  label,
  version,
  hasArrow,
  icon,
  size = ButtonSize.REGULAR,
  asSpan = false,
  href,
  type = ButtonHtmlType.BUTTON,
  onClick,
}: ButtonProps) => {
  const content = (
    <>
      {icon?.iconUrl ? (
        <Icon
          iconUrl={icon.iconUrl}
          width={icon.iconWidth ?? 16}
          height={icon.iconHeight ?? 16}
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

  return <StyledButton type={type} onClick={onClick} {...commonProps} />;
};

export default Button;
