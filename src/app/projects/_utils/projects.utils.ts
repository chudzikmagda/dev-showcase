import type { Metadata } from "next";

import { projectsData } from "../../../shared/data/projects.data";
import {
  type Project,
  type ProjectId,
} from "../../../shared/types/projects.types";
import { SEOType } from "../../../shared/types/seo.types";
import { buildSeoMetadata, SITE_URL } from "../../../shared/utils/seo.utils";

export const getProjectById = (id: ProjectId): Project | undefined => {
  return projectsData.find((project) => project.id === id);
};

export const getProjectMetadata = (id: ProjectId): Metadata => {
  const project = getProjectById(id);

  if (!project) return {};

  return buildSeoMetadata({
    title: `${project.title} | Magda Chudzik`,
    description: project.description,
    url: `${SITE_URL}${project.detailsUrl}`,
    imageUrl: project.listImage.src,
    imageAlt: project.listImage.alt,
    type: SEOType.ARTICLE,
    keywords: project.technologies.join(", "),
  });
};
