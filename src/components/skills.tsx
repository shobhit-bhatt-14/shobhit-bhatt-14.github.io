import Section from "./section";
import { resumeData } from "@/utils/constants";

export default function Skills() {
  return (
    <Section id="skills" title="Technical Skills">
      <div className="space-y-8">
        {resumeData.skills.map((category, index) => (
          <div
            key={index}
            className="bg-card-bg p-6 rounded-lg border border-border hover:border-primary/50"
          >
            <h3 className="text-lg font-semibold text-primary mb-4 font-display">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-border px-4 py-2 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
