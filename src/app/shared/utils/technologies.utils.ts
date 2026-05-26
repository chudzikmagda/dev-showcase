import { technologiesMap } from "../data/technologies.data";
import type { TagData } from "../types/tag.types";
import { Technology, TechnologyData } from "../types/technologies.types";
import { TagColorMode, TagContentMode } from "../types/tag.types";

export const isTagData = (tag: TagData | null): tag is TagData => tag !== null;

export const getTechnologyTag = (technology: Technology): TagData | null => {
  const data: TechnologyData | undefined = technologiesMap.get(technology);
  return data
    ? {
        label: technology,
        icon: data.icon,
        colorMode: TagColorMode.DARK,
        contentMode: TagContentMode.ICON_AND_TEXT,
      }
    : null;
};
