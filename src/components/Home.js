import React from "react";

const Home = () => {
  return (
    <section id="home" className="mb-5 px-1 m-md-5 p-md-5 d-flex justify-content-start">
      <div className="my-5 py-5 py-md-0 m-xl-5 p-xl-5">
        <p className="text-info fs-5">नमस्ते 🙏, my name is</p>
        <p className="text-white fw-bold lh-1">Shobhit Bhatt</p>
        <p className="text-secondary fw-bold fs-6">
          Innovation and Tech Enthusiast | Constant Learner | Open for
          collaboration
        </p>
        <br />
        <br />
        <div className="d-flex text-center">
          <a
            className="btn btn-outline-info fw-bold px-4 py-3 mx-auto m-md-0"
            href="mailto:shobhitbhatt.14@gmail.com"
          >
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
