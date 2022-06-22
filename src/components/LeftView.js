import React from "react";

const LeftView = () => {
  return (
    <div className="d-flex flex-column align-items-center view left">
      <ul className="list-unstyled w-100 d-flex flex-lg-column justify-content-evenly align-items-center p-0 m-0 lh-lg">
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/shobhit-bhatt"
            rel="noreferrer"
          >
            <i className="bi bi-linkedin text-white fs-5 contact-icons"></i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://github.com/shobhit-bhatt-14"
            rel="noreferrer"
          >
            <i className="bi bi-github text-white fs-5 contact-icons"></i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.instagram.com/code.soul.14"
            rel="noreferrer"
          >
            <i className="bi bi-instagram text-white fs-5 contact-icons"></i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://twitter.com/shobhitbhatt_"
            rel="noreferrer"
          >
            <i className="bi bi-twitter text-white fs-5 contact-icons"></i>
          </a>
        </li>
      </ul>
      <br />
      <div className="line d-none d-lg-block bg-white"></div>
    </div>
  );
};

export default LeftView;
