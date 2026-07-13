"use client";

import { JSX, useMemo, useState } from "react";
import styled from "styled-components";

import ProjectListing from "@/app/projects/_components/layout/ProjectListing/ProjectListing";
import ProjectFilter from "@/app/projects/_components/ui/ProjectFilter/ProjectFilter";
import { Breakpoints } from "@/shared/types/breakpoints.types";
import { Technology } from "@/shared/types/technologies.types";

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

  @media (min-width: ${Breakpoints.DESKTOP}) {
    gap: 4rem;
  }
`;
