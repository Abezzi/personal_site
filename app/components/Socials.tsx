import { EmailButton } from "./EmailButton";
import { LinkedinButton } from "./LinkedinButton";
import { CurriculumVitaeButton } from "./CurriculumVitaeButton";
import { GitHubButton } from "./NavbarPartials";

export default function Socials() {
  return (
    <div className="max-w-lg flex justify-center gap-4 mb-4 mx-auto">
      <LinkedinButton /> <GitHubButton /> <EmailButton />
    </div>
  );
}
