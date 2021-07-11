import React from "react";
import { Link } from "react-router-dom";
<Link to="/about">
  <li className="link">About</li>
</Link>;

const Fields = ({ field, menuOpen, setMenuOpen }) => {
  return <Link to={`/${field.link}`}>{field.id}</Link>;
};

export default Fields;
