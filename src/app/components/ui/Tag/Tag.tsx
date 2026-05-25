import type { FC } from "react";
import { TagData, TagContentMode } from "../../../shared/types/tag.types";
import Icon from "../Icon/Icon";
import { TagButton, TagTitle, TagWrapper } from "./tag.styles";

export const Tag: FC<TagData> = ({
  icon,
  label,
  colorMode,
  contentMode,
  clickable,
  active,
  onClick,
}) => {
  const shouldShowIcon =
    contentMode !== TagContentMode.TEXT_ONLY && Boolean(icon);

  const content = (
    <>
      {shouldShowIcon && icon ? (
        <Icon iconUrl={icon} width={16} height={16} alt={label} />
      ) : null}
      <TagTitle $colorMode={colorMode}>{label}</TagTitle>
    </>
  );

  if (clickable) {
    return (
      <TagButton
        type="button"
        aria-pressed={active}
        $colorMode={colorMode}
        $active={active}
        onClick={onClick}
      >
        {content}
      </TagButton>
    );
  }

  return (
    <TagWrapper $colorMode={colorMode} $active={active}>
      {content}
    </TagWrapper>
  );
};

export default Tag;
