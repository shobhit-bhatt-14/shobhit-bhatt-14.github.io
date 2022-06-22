import React from "react";

import Card from "./Card";
import SectionHead from "./SectionHead";

const Experience = () => {
  const exp = [
    {
      title: "Associate Software Developer Intern",
      company: "Akrity Computing",
      timespan: "Feb 2022 - May 2022",
      content: [
        "Worked on a completely new tech stack of Ruby on Rails.",
        "A great experience of learning with implementation.",
      ],
    },
    {
      title: "Co-Founder",
      company: "Perplexed",
      timespan: "May 2021 - Present",
      content: [
        "Look after overall technical stuff.",
        "Active incharge for the various decisions and internal functioning.",
      ],
    },
    {
      title: "Graphics and Web Developer",
      company: "Kumaon Engineerings Enterprises",
      timespan: "Feb 2021 - Nov 2021",
      content: [
        "Provide technical expertise to the admistration.",
        "Managing the overall website and also worked on graphics stuff.",
      ],
    },
    {
      title: "Mentor and Developer",
      company: "LetsGrowMore",
      timespan: "Feb 2021 - Aug 2021",
      content: [
        "Developed new modules and maintain the website.",
        "Helping new fellows while working together.",
      ],
    },
    {
      title: "Supervisor and Lead-Volunteer",
      company: "plant-a-hope",
      timespan: "Nov 2019 - Dec 2020",
      content: [
        "Tried to solve the issue of water scarcity in campus area.",
        "Supervising the program and leading volunteers for proper functioning.",
      ],
    },
  ];

  const cardView = exp.map((e) => {
    const list = e.content.map((c) => {
      return (
        <>
          <li>{c}</li>
          <br />
        </>
      );
    });

    return (
      <Card
        title={e.title}
        company={e.company}
        timespan={e.timespan}
        content={list}
      />
    );
  });

  return (
    <section id="experience" className="mx-xl-5 p-xl-5 d-flex justify-content-end">
      <div className="my-5 mx-lg-5 px-xl-5">
        <SectionHead
          main="02. Experience"
          sub="Where I’ve Worked"
          direction="start"
        />
        <br />
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center justify-content-md-start">
          {cardView}
        </div>
      </div>
    </section>
  );
};

export default Experience;
