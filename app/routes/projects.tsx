import type { MetaFunction } from "@remix-run/node";
import ProjectCard from "~/components/ProjectCard";
import { sql } from "~/db.server";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import DOMPurify from "dompurify";

type ProjectResponse = {
  title: string;
  description: string;
  tags: string[];
  images: string[];
  alt: string;
  repo_link: string;
  date: string;
};

export const loader = async () => {
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

  const response: ProjectResponse[] = projects.map((project) => ({
    title: project.title,
    description: project.description,
    tags: project.tags,
    images: project.images,
    alt: project.alt,
    repo_link: project.repo_link,
    date: project.date,
  }));

  return response;
};

export const meta: MetaFunction = () => {
  return [
    { title: "Projects | Alex Herrera" },
    { name: "project list", content: "A list with projects made by Alex" },
  ];
};

export default function Projects() {
  const projects = useLoaderData<ProjectResponse[]>();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className="text-3xl font-bold underline">Projects</h1>
      {projects.length === 0 ? (
        <p className="text-lg">No projects found.</p>
      ) : (
        <div className="m-2">
          {projects.map((project, index) => (
            <div key={index}>
              <ProjectCard
                header={project.title}
                content={project.description}
                imageSrc={project.images[0]}
                alt={project.alt}
                date={project.date}
                repoLink={project.repo_link}
                tags={project.tags}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
