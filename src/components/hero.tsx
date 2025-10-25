import { resumeData } from "@/utils/constants";

import ProfileLinks from "./profile-links";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center -mt-20"
    >
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-display">
          {resumeData.name}
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6 font-display">
          {resumeData.title}
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          I build high-quality, scalable, and user-friendly web applications.
        </p>
        <ProfileLinks />
      </div>
    </section>
  );
}
