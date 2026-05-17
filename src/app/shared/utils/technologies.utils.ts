import { technologiesMap } from "../data/technologies.data";
import type { TagData } from "../types/tag.types";
import { TechnologyData } from "../types/technologies.types";

export const getTechnologyTag = (technology: string): TagData | null => {
  const data: TechnologyData | undefined = technologiesMap.get(technology);
  return data ? { label: technology, icon: data.icon } : null;
};
