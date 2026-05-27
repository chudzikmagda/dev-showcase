"use client";

import { JSX, useMemo, useState } from "react";
import styled from "styled-components";

import ProjectFilter from "@/app/components/layout/ProjectFilter/ProjectFilter";
import ProjectListing from "@/app/components/layout/ProjectListing/ProjectListing";
import { breakpoints } from "@/app/shared/styles/breakpoints";
import { Technology } from "@/app/shared/types/technologies.types";

import type { ProjectsContentProps } from "./projectsContent.types";

const ProjectsContent = ({ projects }: ProjectsContentProps): JSX.Element => {
  const [activeTechnology, setActiveTechnology] = useState<Technology | null>(
    null,
  );

  const filteredProjects = useMemo(
    () =>
      activeTechnology === null
        ? projects
        : projects.filter((project) =>
            project.technologies.includes(activeTechnology),
          ),
    [activeTechnology, projects],
  );

  return (
    <ListingSection>
      <ProjectFilter
        projects={projects}
        activeTechnology={activeTechnology}
        onFilterChange={setActiveTechnology}
      />
      <ProjectListing projects={filteredProjects} />
    </ListingSection>
  );
};

export default ProjectsContent;

export const ListingSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: var(--container-max-width);

  @media (min-width: ${breakpoints.desktop}) {
    gap: 4rem;
  }
`;
