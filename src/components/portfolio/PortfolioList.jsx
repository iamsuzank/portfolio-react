import React from "react";
import "./portfoliolist.scss";

const PortfolioList = ({ title, active, setSelected, id, show, setShow }) => {
  return (
    <li
      onClick={() => {
        setSelected(id);
        setShow(!show);
      }}
      className={active ? "portfoliolist active" : "portfoliolist"}
    >
      {title}
    </li>
  );
};

export default PortfolioList;
