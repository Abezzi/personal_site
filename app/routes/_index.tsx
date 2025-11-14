import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import Profile from "~/components/Profile";
import Skills from "~/components/Skills";
import Socials from "~/components/Socials";
import Me from "/me.png";
import About from "~/components/About";
import { sql } from "~/db.server";
import Projects from "~/components/Projects";
import { useLoaderData } from "@remix-run/react";
// import Experience from "~/components/Experience";

export const meta: MetaFunction = () => {
  return [
    { title: "Alex Herrera | Developer" },
    {
      name: "description",
      content: "quote for the site, job experience and skills",
    },
  ];
};

export const loader: LoaderFunction = async () => {
  const projects = await sql`
    SELECT
      title, description, tags::text[], images::text[], alt, repo_link,
      TO_CHAR(date, 'DD Month YYYY') AS date
    FROM project
    LIMIT 3  -- optional: show only a few on homepage
  `;

  return {
    projects: projects.map((p) => ({
      title: p.title,
      description: p.description,
      tags: p.tags,
      images: p.images,
      alt: p.alt,
      repo_link: p.repo_link,
      date: p.date,
    })),
  };
};

export default function Index() {
  const { projects } = useLoaderData<{ projects: any[] }>();

  return (
    <div className="">
      <Profile
        imageSrc={Me}
        name="Alex Herrera"
        description="Developer who loves to acquire as many skills as possible, following the direction of the circumstances that impose my deepest interest in the world of technology."
        width={128}
        height={128}
      />
      <Socials />
      <About />
      {/* <Experience /> */}
      <Skills />
      <Projects projects={projects} />
    </div>
  );
}
