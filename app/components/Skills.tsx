import SkillCard from "./SkillCard";

const ADVANCED = "Advanced";
const INTERMEDIATE = "Intermediate";
const BEGINNER = "Beginner ";

type SkillAndLevel = {
  skill: string;
  level: string;
};

const languages: SkillAndLevel[] = [
  { skill: "C/C++", level: ADVANCED },
  { skill: "Python", level: ADVANCED },
  { skill: "React", level: ADVANCED },
  { skill: "Go", level: INTERMEDIATE },
  { skill: "PHP", level: INTERMEDIATE },
  { skill: "Typescript", level: INTERMEDIATE },
  { skill: "Javascript", level: INTERMEDIATE },
  { skill: "NodeJS", level: INTERMEDIATE },
  { skill: "Java", level: BEGINNER },
  { skill: "Rust", level: BEGINNER },
];

const databases: SkillAndLevel[] = [
  { skill: "PostgreSQL", level: ADVANCED },
  { skill: "MySQL", level: ADVANCED },
  { skill: "MongoDB", level: BEGINNER },
  { skill: "OracleDB", level: BEGINNER },
];

const others: SkillAndLevel[] = [
  { skill: "Linux", level: ADVANCED },
  { skill: "Django", level: ADVANCED },
  { skill: "Docker", level: INTERMEDIATE },
  { skill: "tailwindcss", level: INTERMEDIATE },
  { skill: "HTML/CSS", level: INTERMEDIATE },
  { skill: "TypeORM", level: INTERMEDIATE },
  { skill: "Navicat", level: INTERMEDIATE },
  { skill: "Remix Framework", level: INTERMEDIATE },
  { skill: "Netlify", level: INTERMEDIATE },
  { skill: "LateX", level: ADVANCED },
  { skill: "Microsoft Office", level: INTERMEDIATE },
  { skill: "Microsoft Excel", level: INTERMEDIATE },
  { skill: "Microsoft PowerPoint", level: INTERMEDIATE },
  { skill: "Canvas", level: INTERMEDIATE },
  { skill: "GIMP/Photoshop", level: INTERMEDIATE },
];

export default function Skills() {
  return (
    <div>
      <h1 className="tracking-tighter font-bold dark:text-slate-300 text-slate-800 text-3xl md:text-4xl mx-auto m-6">
        Skills
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <SkillCard header="Programming Languages" languages={languages} />
        <SkillCard header="Data Base related" languages={databases} />
        <SkillCard header="Others" languages={others} />
      </div>
    </div>
  );
}
