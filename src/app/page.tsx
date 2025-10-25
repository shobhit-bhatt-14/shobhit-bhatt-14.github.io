import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Education from "@/components/education";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <div className="leading-relaxed">
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
