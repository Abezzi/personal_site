import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <div>
      <h1 className="tracking-tighter font-bold dark:text-slate-300 text-slate-800 text-3xl md:text-4xl mx-auto m-6">
        Experience
      </h1>
      <ExperienceCard
        dateInitial="01/01/2022"
        dateEnd="01/05/2023"
        jobTitle="Developer"
        jobContent="in charge of something"
      />
    </div>
  );
}
