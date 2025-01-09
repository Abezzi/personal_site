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
  { text: "react", color: "blue" },
  { text: "python", color: "green" },
  { text: "remix", color: "red" },
  { text: "netlify", color: "yellow" },
];

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className="text-3xl font-bold underline">Projects</h1>
      <div className="m-2">
        <ProjectCard
          header="Porfolio Website"
          content="The main goal of this project is showcase the abilities as a frontend developer deploying real world applications. This site project was created using the remix framework, react with typescript, tailwindcss for the style, hosted on netlify. The backend is an API made with flask hosted in AWS"
          imageSrc="../../public/ss.png"
          alt="screenshot of this website"
          date=""
          repoLink="https://github.com/Abezzi/personal_site"
          tags={tags}
        />
        {/*
        <ProjectCard header="Restaurant (WIP)" content="lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum" imageSrc="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fpremium-vector%2Fwatermelon-vector-pencil-ink-sketch-drawing-black-white-monochrome-engraving-style_1075459-15258.jpg&f=1&nofb=1&ipt=3165af76fa8a702d5c6aafb19f9013803af7145685a441e46401db722abc6c44&ipo=images" date="" repoLink="https://github.com/Abezzi/personal_site" tags={tags} />
          */}
      </div>
    </div>
  );
}
