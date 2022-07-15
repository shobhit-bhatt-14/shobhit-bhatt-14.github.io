import React from "react";

const Navbar = () => {
  const handleClick = () => {
    document.querySelector(".navbar-toggler").click();
  };

  return (
    <header id="header" className="p-0 px-xl-5 py-2 fixed-top shadow">
      <nav className="navbar navbar-expand-md mx-2 mx-xl-5" aria-label="navbar">
        <div className="container-fluid">
          <a
            className="navbar-brand border border-info border-2 rounded text-info fs-4 fw-bold"
            href="#home"
          >
            <p className="m-1 p-0">S</p>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list fs-3 text-white"></i>
          </button>
          <div
            className="collapse navbar-collapse mt-2 text-center"
            id="navbar"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item mx-1 mx-lg-3">
                <a
                  onClick={handleClick}
                  className="nav-link text-white"
                  href="#about"
                >
                  <span className="text-info">01.</span>&ensp;About
                </a>
              </li>
              <li className="nav-item mx-1 mx-lg-3">
                <a
                  onClick={handleClick}
                  className="nav-link text-white"
                  href="#experience"
                >
                  <span className="text-info">02.</span>&ensp;Experience
                </a>
              </li>
              <li className="nav-item mx-1 mx-lg-3">
                <a
                  onClick={handleClick}
                  className="nav-link text-white"
                  href="#work"
                >
                  <span className="text-info">03.</span>&ensp;Work
                </a>
              </li>
              <li className="nav-item mx-1 mx-lg-3">
                <a
                  onClick={handleClick}
                  className="nav-link text-white"
                  href="#contact"
                >
                  <span className="text-info">04.</span>&ensp;Contact
                </a>
              </li>
            </ul>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1FIwILCk-spDUW_lVkwFWxnaP2QG72Pzq/view?usp=sharing"
              className="btn btn-outline-info mx-lg-3"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
