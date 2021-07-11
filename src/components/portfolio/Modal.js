import React from "react";
import "./modal.scss";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/Link";

const Modal = ({ show, setShow, title, desc, code, demo }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal-header">
        <p>{title}</p>
        <span onClick={() => setShow(false)} className="close-modal-btn">
          X
        </span>
      </div>

      <div className="modal-content">
        <div className="modal-body">
          <p>{desc}</p>
        </div>
        <div className="modal-footer">
          <a href={code} target="_blank">
            <button className="btn-code">
              Code
              <GitHubIcon />
            </button>
          </a>
          <a href={demo} target="_blank">
            <button className="btn-demo">
              Demo
              <LinkIcon />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
