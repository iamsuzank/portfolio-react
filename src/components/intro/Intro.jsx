import "./intro.scss";
import { init } from "ityped";
import React, { useEffect, useRef } from "react";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      startDelay: 500,
      showCursor: true,
      backDelay: 1000,
      backSpeed: 80,
      strings: [
        "Data Science Enthusiast.",
        "Machine Learning Practioner.",
        "React JS Developer.",
      ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/me.png" alt="my pic" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <div className="namaste">
            <img src="assets/nam.png" alt="namaste" />
            <h2>Namaste</h2>
            <h1>I'm, Sujan Katwal</h1>
            <h3>
              and I'm a <span ref={textRef}> </span>
            </h3>
          </div>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="click to view more" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
