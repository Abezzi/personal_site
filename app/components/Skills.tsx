import SkillCard from "./SkillCard";

const ADVANCED = "Advanced"
const INTERMEDIATE = "Intermediate"
const BEGINNER = "Beginner "

type SkillAndLevel = {
  skill: string,
  level: string,
}


const languages: SkillAndLevel[] = [
  { skill: "C/C++", level: ADVANCED },
  { skill: "Python", level: INTERMEDIATE },
  { skill: "Go", level: INTERMEDIATE },
  { skill: "React", level: INTERMEDIATE },
  { skill: "Typescript", level: INTERMEDIATE },
  { skill: "Javascript", level: INTERMEDIATE },
  { skill: "Java", level: INTERMEDIATE },
  { skill: "Rust", level: INTERMEDIATE },
]

const databases: SkillAndLevel[] = [
  { skill: "PostgreSQL", level: ADVANCED },
  { skill: "MySQL", level: ADVANCED },
  { skill: "OracleDB", level: BEGINNER },
]

const others: SkillAndLevel[] = [
  { skill: "Linux", level: ADVANCED },
  { skill: "Latex", level: ADVANCED },
  { skill: "Office/Excel/PowerPoint", level: INTERMEDIATE },
]

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
