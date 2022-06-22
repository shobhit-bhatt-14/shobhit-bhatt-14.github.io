import React from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container-fluid px-lg-5">
      <Navbar />
      <br />
      <main className="mx-md-5 px-xl-5">
        <Home />
        <About />
        <Experience />
        <Work />
        <Contact />
      </main>
      <br />
      <Footer />
    </div>
  );
}

export default App;
