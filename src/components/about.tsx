import { resumeData } from "@/utils/constants";
import Section from "./section";

export default function About() {
  return (
    <Section id="about" title="About Me">
      <p className="text-center text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
        {resumeData.summary}
      </p>
    </Section>
  );
}
