import React from "react";

const ProjectView = (props) => {
  const techStack = props.tech.map((t) => {
    return <li className="mx-1">{t}</li>;
  });

  return (
    <li
      className={`d-flex align-items-center mb-5 mt-2 my-md-5 py-lg-5 ${
        props.direction ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="d-none d-md-block" id="project-img">
        <img
          className="rounded opacity-25"
          src={require(`../assets/${props.image}.png`)}
          height="350"
          width="600"
          alt={props.title}
        />
      </div>
      <div
        className={`text-white text-center text-md-end project-${
          props.direction ? "right" : "left"
        }`}
      >
        <hr className="d-md-none" />
        <p
          id="project-title"
          className={`fs-2 fw-bold text-info text-center text-md-${
            props.direction ? "start" : "end"
          }`}
        >
          {props.title}
        </p>
        <br className="d-none d-md-block" />
        <p
          id="project-text"
          className={`rounded p-3 text-center text-md-${props.direction ? "start" : "end"} content-${props.direction ? "right" : "left"}`}
        >
          {props.content}
        </p>
        <ul
          className={`list-unstyled text-secondary d-flex flex-wrap justify-content-center justify-content-md-${
            props.direction ? "start" : "end"
          }`}
        >
          {techStack}
        </ul>
        <br />
        <ul
          className={`list-unstyled d-flex justify-content-center justify-content-md-${
            props.direction ? "start" : "end"
          }`}
        >
          {props.link && (
            <li className="mx-3">
              <a target="_blank" href={props.link} rel="noreferrer">
                <i className="bi bi-link-45deg fs-3 text-white"></i>
              </a>
            </li>
          )}
          <li className="mx-3">
            <a target="_blank" href={props.github} rel="noreferrer">
              <i className="bi bi-folder fs-3 text-white"></i>
            </a>
          </li>
        </ul>
        <hr className="d-md-none" />
      </div>
    </li>
  );
};

export default ProjectView;
