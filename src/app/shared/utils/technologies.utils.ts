import { technologiesMap } from "../data/technologies.data";
import type { TagData } from "../types/tag.types";
import { Technology, TechnologyData } from "../types/technologies.types";

export const isTagData = (tag: TagData | null): tag is TagData => tag !== null;

export const getTechnologyTag = (technology: Technology): TagData | null => {
  const data: TechnologyData | undefined = technologiesMap.get(technology);
  return data ? { label: technology, icon: data.icon } : null;
};
