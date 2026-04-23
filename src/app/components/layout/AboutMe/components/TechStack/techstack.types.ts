import type { Image } from "@/app/shared/models/image.types";

export enum TechStackCategories {
  Frontend = "Frontend Development",
  Backend = "Backend Development",
  AI = "AI-Assisted Development",
  Testing = "Testing & Quality Assurance",
  DevOps = "Cloud & DevOps",
  Design = "Design",
  PM = "Tools & Project Management",
  Knowledge = "Knowledge & Best Practices",
  Learning = "Currently Learning",
}

export interface Technology {
  image: Image;
  category: TechStackCategories;
}

export interface GridPosition {
  colSpan: number;
  rowSpan: number;
}
