import Section from "./section";
import GraduationCapIcon from "@/icons/graduation-cap";
import { resumeData } from "@/utils/constants";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="relative border-l-2 border-primary ml-4 md:ml-0">
        {resumeData.education.map((edu, index) => (
          <div key={index} className="mb-10 pl-10 relative">
            <div className="absolute -left-5 top-1 p-1 rounded-full">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                <GraduationCapIcon />
              </span>
            </div>
            <div className="bg-card-bg p-6 rounded-lg shadow-lg border border-border hover:border-primary/50 transition-all duration-300">
              <p className="text-sm mb-1">{edu.period}</p>
              <h3 className="text-xl font-bold text-primary font-display">
                {edu.institution}
              </h3>
              <p className="text-md font-semibold">{edu.degree}</p>
              <p className="mt-2">Score: {edu.score}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
