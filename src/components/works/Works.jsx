import "./works.scss";
import WorkSlider from "./WorkSlider";
import { featuredAPP as data } from "../../data/data";
import { useState } from "react";
import arrow from "../img/arrow.png";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // SLIDER FUNCTION
  const slideHandler = (e) => {
    e === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d, index) => (
          <WorkSlider key={index} title={d.title} img={d.img} desc={d.desc} />
        ))}
      </div>
      <img
        onClick={() => slideHandler("lefr")}
        src={arrow}
        className="arrow left"
        alt="arrow"
      />

      <img
        onClick={() => slideHandler()}
        src={arrow}
        className="arrow right"
        alt="arrow"
      />
    </div>
  );

  <KeyboardArrowDownIcon />;
};

export default Works;
