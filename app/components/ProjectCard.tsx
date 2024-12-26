interface ProjectCardProps {
  header: string,
  content: string,
  date: string,
  imageSrc: string,
  repoLink?: string,
  tags: tag[]
}

type tag = {
  text: string,
  color: string,
}

function ProjectCard({ header, content, date, imageSrc, repoLink, tags }: ProjectCardProps) {

  const tagList = tags.map((item, index) => (
    <div key={index}>
      <button className={"font-semibold py-1 px-2 rounded-lg text-sm underline decoration-2 decoration-" + item.color + "-500"}>
        {item.text}
      </button>
    </div>
  ));

  return (
    <div className="border rounded p-4 mb-2">
      <h2 className="text-2xl font-bold">{header}
        <a className="text-slate-700 dark:text-slate-300" href={repoLink}> &lt;Github&gt;</a>
      </h2>
      <p className="text-gray-500 mb-4">{date}</p>

      <div className="flex">
        <img src={imageSrc} alt="Project Illustration" className="w-1/3 rounded mr-4" />
        <p className="text-base">{content}</p>
      </div>
      <div className="flex flex-wrap-gap-2">
        {tagList}
      </div>
    </div >
  );
}

export default ProjectCard
