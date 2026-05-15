import type { Metadata } from "next";
import { PageWrapper } from "./projects.styles";

export const metadata: Metadata = {
  title: "Projects | Magda Chudzik",
  description:
    "Browse selected frontend and UI/UX projects implemented by Magda Chudzik.",
};

export default function ProjectsPage() {
  return <PageWrapper></PageWrapper>;
}
