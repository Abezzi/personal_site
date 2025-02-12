import type { MetaFunction } from "@remix-run/node";
import ProjectCard from "~/components/ProjectCard";

export const meta: MetaFunction = () => {
  return [
    { title: "Projects | Alex Herrera" },
    { name: "project list", content: "A list with projects made by Alex" },
  ];
};

type tag = {
  text: string;
  color: string;
};

const tags: tag[] = [
  { text: "React", color: "blue" },
  { text: "Python", color: "green" },
  { text: "Remix", color: "red" },
  { text: "Netlify", color: "yellow" },
];

const tags_blango: tag[] = [
  { text: "Django", color: "green" },
  { text: "RestfulAPI", color: "green" },
];

const tags_restaurant: tag[] = [
  { text: "React", color: "blue" },
  { text: "Typescript", color: "blue" },
  { text: "Django", color: "green" },
  { text: "RestfulAPI", color: "yellow" },
  { text: "Docker", color: "blue" },
];

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className="text-3xl font-bold underline">Projects</h1>
      <div className="m-2">
        <ProjectCard
          header="Porfolio Website"
          content="The main goal of this project is showcase the abilities as a frontend developer deploying real world applications. This site project was created using the remix framework, react with typescript, tailwindcss for the style, hosted on netlify. The backend is an API made with django framework."
          imageSrc="https://github.com/Abezzi/personal_site/blob/main/public/ss.png?raw=true"
          alt="screenshot of this website"
          date=""
          repoLink="https://github.com/Abezzi/personal_site"
          tags={tags}
        />
        <ProjectCard
          header="(WIP) Django Blog (blango)"
          content="A simple blog made with django, used 12 factor, authentication and authorization, part of the coursera course Advanced Django: Mastering Django and Django Rest Framework by Codio"
          imageSrc="https://github.com/Abezzi/personal_site/blob/main/public/ss.png?raw=true"
          alt="screenshot of django blog project"
          date=""
          repoLink="https://github.com/Abezzi/blango"
          tags={tags_blango}
        />
        <ProjectCard
          header="(WIP) Restaurant SaaS"
          content="Restaurant system to showcase all the skills together in a unified project, monorepo"
          imageSrc="https://github.com/Abezzi/personal_site/blob/main/public/ss.png?raw=true"
          alt="screenshot of django blog project"
          date=""
          repoLink="https://github.com/Abezzi/blango"
          tags={tags_restaurant}
        />
      </div>
    </div>
  );
}
