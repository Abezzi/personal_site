
interface ExperienceProps {
  dateInitial: string;
  dateEnd: string;
  jobTitle: string;
  jobContent: string;
}
export default function ExperienceCard({ dateInitial, dateEnd, jobTitle, jobContent }: ExperienceProps) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className=""> {dateInitial} - {dateEnd} </div>
      <div className="col-span-2"> {jobTitle} - {jobContent} </div>
    </div>
  );
}
