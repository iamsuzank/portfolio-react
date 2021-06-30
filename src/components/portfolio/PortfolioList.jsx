import React from "react";
import "./portfoliolist.scss";

const PortfolioList = ({ title, active, setSelected, id }) => {
  return (
    <li
      onClick={() => setSelected(id)}
      className={active ? "portfoliolist active" : "portfoliolist"}
    >
      {title}
    </li>
  );
};

export default PortfolioList;
