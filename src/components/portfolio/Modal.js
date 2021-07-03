import { SettingsPhoneTwoTone } from "@material-ui/icons";
import React from "react";
import "./modal.scss";
const Modal = ({ show, setShow, title, desc, code, demo }) => {
  return (
    <div
      className="modal-wrapper"
      style={{
        transform: show ? "translateY(0vh)" : "translateY(-100vh)",
        opacity: show ? "1" : "0",
      }}
    >
      <div className="modal-header">
        <p>{title}</p>
        <span onClick={() => setShow(!show)} className="close-modal-btn">
          X
        </span>
      </div>

      <div className="modal-content">
        <div className="modal-body">
          <p>{desc}</p>
        </div>
        <div className="modal-footer">
          <a href={code} target="_blank">
            <button className="btn-code">Code</button>
          </a>
          <a href={demo} target="_blank">
            <button className="btn-demo">Demo</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
