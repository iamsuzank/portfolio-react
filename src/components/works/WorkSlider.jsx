import React from "react";
import mobile from "../img/mobile.png";

const WorkSlider = ({ title, img, desc }) => {
  return (
    <div className="container">
      <div className="item">
        <div className="left">
          <div className="leftContainer">
            <div className="imgContainer">
              <img src={mobile} alt="mobile" />
            </div>
            <h2>{title}</h2>
            <p>{desc}</p>
            <span>Projects</span>
          </div>
        </div>
        <div className="right">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WorkSlider;
