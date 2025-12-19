import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { sql } from "~/db.server";
import Projects from "~/components/Projects";

type ProjectResponse = {
  title: string;
  description: string;
  tags: string[];
  images: string[];
  alt: string;
  repo_link: string;
  date: string;
};

export const loader: LoaderFunction = async () => {
  const projects = await sql`
    SELECT
      title,
      description,
      tags::text[],
      images::text[],
      alt,
      repo_link,
      TO_CHAR(date, 'DD Month YYYY') AS date
    FROM project
  `;

  return projects.map((project) => ({
    title: project.title,
    description: project.description,
    tags: project.tags,
    images: project.images,
    alt: project.alt,
    repo_link: project.repo_link,
    date: project.date,
  }));
};

export const meta: MetaFunction = () => {
  return [
    { title: "Projects | Alex Herrera" },
    { name: "project list", content: "A list with projects made by Alex" },
  ];
};

export default function ProjectsRoute() {
  const projects = useLoaderData<ProjectResponse[]>();
  return <Projects projects={projects} />;
}
