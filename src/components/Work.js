import React from "react";

import SectionHead from "./SectionHead";
import ProjectView from "./ProjectView";

const Work = () => {
  const projectDetails = [
    {
      title: "Know the Alphabets",
      image: "knowthealphabets",
      content:
        "The main motive of this project is to make teaching and learning easy for teachers and kids respectively. It provides visuals for alphabets including letter and associated thing. It displays a keyboard and on each keypress the corresponding visuals are shown.",
      tech: ["HTML & CSS", "Bootstrap", "React", "JavaScript"],
      github: "https://github.com/shobhit-bhatt-14/Know-the-Alphabets",
      link: "https://know-the-alphabets.shobhitbhatt.tech",
    },
    {
      title: "Neuro-Matter",
      image: "neuromatter",
      content:
        "Neuro-Matter is an integrated social platform designed to combat not one, but 3 major issues facing our world today: Inequality, Neurological Disorders, and lack of information/news.",
      tech: ["HTML & CSS", "Bootstrap", "JavaScript", "React"],
      github: "https://github.com/shobhit-bhatt-14/Neuro-Matter",
      link: "",
    },
    {
      title: "Digi-Farm",
      image: "digifarm",
      content:
        "A smart media for farmers to mark their digital presence. Get updated with the latest schemes/acts for farmers that will show up in the feeds section. The user can raise any related query in the dedicated discussion forum.",
      tech: ["Ruby on Rails", "Bootstrap", "React", "Sqlite3"],
      github: "https://github.com/shobhit-bhatt-14/Digi-Farm",
      link: "",
    },
    {
      title: "Learn-ect",
      image: "learnect",
      content:
        "A smart educational social media platform that aims to promote equality as it doesn't shows any gender identification, enables you to search across free resources and provides a bunch of hatefree and non-misleading content.",
      tech: ["HTML & CSS", "Bootstrap", "JavaScript", "Firebase"],
      github: "https://github.com/shobhit-bhatt-14/Learn-ect",
      link: "",
    },
  ];

  let direction = false;

  const projects = projectDetails.map((p) => {
    direction = !direction;
    return (
      <ProjectView
        direction={direction}
        title={p.title}
        image={p.image}
        content={p.content}
        tech={p.tech}
        github={p.github}
        link={p.link}
      />
    );
  });

  return (
    <section id="work" className="mx-xl-5 p-xl-5 d-flex justify-content-center">
      <div className="my-5 mx-lg-5 px-xl-5 text-start">
        <SectionHead main="03. Work" sub="Things I Do" direction="end" />
        <br className="d-md-none" />
        <ul className="d-flex justify-content-center flex-column align-items-center p-0">
          {projects}
        </ul>
      </div>
    </section>
  );
};

export default Work;
