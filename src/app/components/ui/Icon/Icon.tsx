import type { FC } from "react";
import Image from "next/image";
import { IconProps } from "./icon.types";

const Icon: FC<IconProps> = ({
  iconUrl,
  width,
  height,
  alt = "",
  className,
}) => {
  return (
    <Image
      src={iconUrl}
      width={width}
      height={height}
      alt={alt}
      className={className}
    />
  );
};

export default Icon;
