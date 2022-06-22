import React from "react";

import SectionHead from "./SectionHead";
import LeftView from "./LeftView";
import RightView from "./RightView";

const Contact = () => {
  return (
    <section
      id="contact"
      className="mx-xl-5 p-xl-5 d-flex justify-content-center"
    >
      <div className="my-5 mx-lg-5 px-xl-5">
        <SectionHead main="04. Contact" sub="Get in Touch" direction="start" />
        <br />
        <div className="d-flex justify-content-center justify-content-md-start px-3 px-md-0 pe-lg-5 me-xl-5">
          <p className="text-white pe-xl-5 me-xl-5 w-md-75 w-lg-50 lh-base">
            I will be happy as well as very excited to connect and collaborate
            onto various aspects. My inbox is always open, whether you have a
            question or just want to say hi, I’ll try my best to get back to
            you!
          </p>
        </div>
        <br />
        <a
          className="d-none btn btn-outline-info fw-bold px-4 py-3"
          href="mailto:shobhitbhatt.14@gmail.com"
        >
          Say Hello
        </a>
        <LeftView />
        <RightView />
      </div>
    </section>
  );
};

export default Contact;
