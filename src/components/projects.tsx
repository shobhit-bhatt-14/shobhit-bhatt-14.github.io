import Section from "./section";
import { resumeData } from "@/utils/constants";

export default function Projects() {
  return (
    <Section id="projects" title="My Projects">
      <div className="grid md:grid-cols-2 gap-8">
        {resumeData.projects.map((project, index) => (
          <div
            key={index}
            className="bg-card-bg p-6 rounded-lg shadow-lg border border-border transition-all duration-300 transform hover:-translate-y-2 hover:border-primary/50 flex flex-col"
          >
            <div className="grow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-primary font-display">
                  {project.title}
                </h3>
                {/* <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Project on GitHub"
                  className="hover:text-primary"
                >
                  <GithubIcon />
                </a> */}
              </div>
              <p className="mb-4">{project.description}</p>
            </div>
            <div className="mt-auto">
              <p className="text-sm text-primary font-mono">
                {project.technologies}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
