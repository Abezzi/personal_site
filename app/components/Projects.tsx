import ProjectCard from "~/components/ProjectCard";

type ProjectResponse = {
  title: string;
  description: string;
  tags: string[];
  images: string[];
  alt: string;
  repo_link: string;
  date: string;
};

type ProjectsProps = {
  projects: ProjectResponse[];
};

export default function Projects({ projects }: ProjectsProps) {
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
