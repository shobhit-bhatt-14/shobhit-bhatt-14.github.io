import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Education from "@/components/education";
import Footer from "@/components/footer";
import { resumeData, siteUrl } from "@/utils/constants";

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: resumeData.name,
    url: siteUrl,
    jobTitle: resumeData.title,
    email: resumeData.contact.email,
    sameAs: [resumeData.contact.linkedin, resumeData.contact.github],
    knowsAbout: resumeData.skills.flatMap((category) => category.skills),
  };

  return (
    <div className="leading-relaxed">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>
      <Footer />
    </div>
  );
}
