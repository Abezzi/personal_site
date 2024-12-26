type SkillAndLevel = {
  skill: string,
  level: string,
}

interface SkillCardProps {
  header: string,
  languages: SkillAndLevel[],
}

function SkillCard({ header, languages }: SkillCardProps) {

  const SkillLevelList = languages.map((item, index) => (
    <li className="flex justify-between dark:hover:bg-slate-900 hover:bg-slate-200" key={index}>
      <span>{item.skill}</span>
      <span className="eading-normal tracking-tight dark:text-slate-400 text-slate-700">{item.level}</span>
    </li>
  ));

  return (
    <div className="flex flex-col max-w-sm rounded overflow-hidden shadow-lg">
      <h1 className="tracking-tighter font-bold dark:text-slate-300 text-slate-800 text-2xl md:text-3xl mx-auto m-6">{header}</h1>
      <ul className="flex-auto m-4">{SkillLevelList}</ul>
    </div>
  );
}

export default SkillCard
