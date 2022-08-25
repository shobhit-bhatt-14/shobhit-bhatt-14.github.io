import React from "react";

import shobhit from "../assets/shobhit.jpg";
import SectionHead from "./SectionHead";

const About = () => {
  return (
    <section
      id="about"
      className="mx-xl-5 px-3 p-xl-5 d-flex justify-content-center"
    >
      <div className="my-5 mx-lg-5 px-xl-5">
        <SectionHead main="01. About" sub="Know Me" direction="end" />
        <br />
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-evenly">
          <p className="text-white lh-1 pe-md-3 pe-xl-5 me-xl-5 w-md-50 text-justify">
            Hello! My name is Shobhit Bhatt and I enjoy creating things that
            live on the internet. I am a fresher Engineering graduate with
            majors in Computer Science and Engineering.
            <br />
            <br />
            A learner trying hands on skills around me and looking forward to
            grab new opportunities. My interest in web development started back
            in 2019 when I decided to try developing a personal portfolio
            website that taught me a lot about HTML & CSS!
            <br />
            <br />
            Here are a few technologies from my tech stack:
            <br />
            <br />
            <ul className="row row-cols-2 lh-base">
              <li className="col">React.js</li>
              <li className="col">Nextt.js</li>
              <li className="col">Google App Script</li>
              <li className="col">Git</li>
              <li className="col">Ruby on Rails</li>
              <li className="col">WordPress</li>
            </ul>
          </p>
          <div className="mb-5">
            <img
              className="rounded"
              width="300"
              height="300"
              src={shobhit}
              alt="Shobhit Bhatt"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
