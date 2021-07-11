import "./intro.scss";
import { init } from "ityped";
import React, { useEffect, useRef } from "react";
import down from "../img/down.png";
import me from "../img/me.png";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Link } from "react-router-dom";

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
          <img src={me} alt="my pic" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <div className="namaste">
            <h2>Namaste</h2>
            <h1>I'm, Sujan Katwal</h1>
            <h3>
              and I'm a <span ref={textRef}> </span>
            </h3>
          </div>
        </div>
        <Link to="/portfolio">
          <KeyboardArrowDownIcon />
        </Link>
      </div>
    </div>
  );
};

export default Intro;
