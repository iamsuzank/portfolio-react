import React from "react";

const Fields = ({ field, menuOpen, setMenuOpen }) => {
  return (
    <a onClick={() => setMenuOpen(!menuOpen)} href={`${field.link}`}>
      {field.id}
    </a>
  );
};

export default Fields;
