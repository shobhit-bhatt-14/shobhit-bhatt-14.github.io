import Section from "./section";
import BriefcaseIcon from "@/icons/briefcase";
import { resumeData } from "@/utils/constants";

export default function Experience() {
  return (
    <Section id="experience" title="Work Experience">
      <div className="relative border-l-2 border-primary ml-4 md:ml-0">
        {resumeData.experience.map((job, index) => (
          <div key={index} className="mb-12 pl-10 relative">
            <div className="absolute -left-5 top-1 p-1 rounded-full">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                <BriefcaseIcon />
              </span>
            </div>
            <div className="bg-card-bg p-6 rounded-lg shadow-lg border border-border hover:border-primary/50 transition-all duration-300">
              <p className="text-sm mb-1">{job.period}</p>
              <h3 className="text-xl font-bold text-primary font-display">
                {job.role}
              </h3>
              <p className="text-md font-semibold mb-4">{job.company}</p>
              <ul className="list-disc list-inside space-y-2">
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
