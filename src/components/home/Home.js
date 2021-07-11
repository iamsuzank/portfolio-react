import react, { useState } from "react";
import Topbar from "../topbar/Topbar";
import Intro from "../intro/Intro";
import Portfolio from "../portfolio/Portfolio";
import Works from "../works/Works";
import Testimonials from "../testimonials/Testimonials";
import Contact from "../contact/Contact";
import Menu from "../menu/Menu";
import "./home.scss";

function Home() {
  return (
    <div className="sections">
      <Intro />
      <Portfolio />
      <Works />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default Home;
