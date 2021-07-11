import React from "react";
import { NavLink } from "react-router-dom";
import { MenuList } from "./MenuList";
import "./navbar.scss";
import batman from "../img/ironman-small.svg";
import left from "../img/left-arrow.svg";
import diagonal from "../img/diagonal-line.svg";
import right from "../img/right-arrow.svg";
import Home from "../home/Home";

const Navbar = () => {
  const myMenu = MenuList.map((menu, index) => {
    return (
      <li key={index}>
        <NavLink exact to={menu.url} activeClassName="active">
          {menu.title}
        </NavLink>
      </li>
    );
  });

  return (
    <nav>
      <div className="logo">
        <img src={left} alt="" />
        <div className="sk">
          S<font>K</font>
        </div>
        <div className="ironman">
          <NavLink to="/">
            <img src={batman} alt="" />
          </NavLink>
        </div>
        <img src={right} alt="" />
      </div>
      <ul className="menu-list">{myMenu}</ul>
    </nav>
  );
};

export default Navbar;
