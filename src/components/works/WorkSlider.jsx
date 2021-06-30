import React from "react";

const WorkSlider = ({ title, img, desc }) => {
  return (
    <div className="container">
      <div className="item">
        <div className="left">
          <div className="leftContainer">
            <div className="imgContainer">
              <img src="../assets/mobile.png" alt="mobile" />
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
