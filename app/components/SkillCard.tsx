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
    <li key={index}>{`${item.skill} - ${item.level}`}</li>
  ));

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <h1 className="tracking-tighter font-bold dark:text-slate-300 text-slate-800 text-2xl md:text-3xl mx-auto m-6">{header}</h1>
      <ul className="mb-2">{SkillLevelList}</ul>
    </div>
  );
}

export default SkillCard
