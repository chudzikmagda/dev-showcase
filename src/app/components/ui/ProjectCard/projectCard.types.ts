import { TagData } from "@/app/shared/types/tag.types";

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: TagData[];
  caseStudyUrl: string;
  image: {
    src: string;
    alt?: string;
  };
}
