import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen ? "active" : "")}>
      <div className="wrapper">
        <div className="left">
          <a className="logo" href="#intro">
            SK
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span> +977 9849218946</span>
          </div>

          <div className="itemContainer">
            <Mail className="icon" />
            <span>iamsuzank@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div onClick={() => setMenuOpen(!menuOpen)} className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
