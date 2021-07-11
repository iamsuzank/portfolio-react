import { useState, useEffect } from "react";
import "./portfolio.scss";
import PortfolioList from "./PortfolioList";
import { featuredAPP, AIAPP, webAPP, mobileAPP } from "../../data/data";
import { ExpandMore } from "@material-ui/icons";
import Modal from "./Modal";
import down from "../img/down.png";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "AI",
      title: "AI App",
    },
  ];

  // loading data based on category
  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredAPP);
        setShow(false);
        break;

      case "web":
        setData(webAPP);
        setShow(false);
        break;

      case "mobile":
        setShow(false);
        setData(mobileAPP);
        break;

      case "AI":
        setShow(false);
        setData(AIAPP);
        break;

      default:
        setShow(false);
        setData(featuredAPP);
    }
  }, [selected]);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [code, setCode] = useState("");
  const [demo, setDemo] = useState("");

  const modalPropsHandler = (apps) => {
    setShow(!show);
    setTitle(apps.title);
    setDesc(apps.desc);
    setCode(apps.codeLink);
    setDemo(apps.demoLink);
  };

  return (
    <div className="portfolio" id="portfolio">
      <div className="upper">
        <h1>Portfolio</h1>
        <ul>
          {list.map((item, index) => (
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
              show={show}
              setShow={setShow}
              key={index}
            />
          ))}
        </ul>
        <div className="container">
          {show ? (
            <Modal
              show={show}
              setShow={setShow}
              title={title}
              desc={desc}
              code={code}
              demo={demo}
            />
          ) : (
            data.map((apps, index) => (
              <div className="item" key={index}>
                <img
                  src={apps.img}
                  alt="apps.title"
                  onClick={() => modalPropsHandler(apps)}
                />
                <h3>{apps.title}</h3>
              </div>
            ))
          )}
        </div>
        <div className="buttom">
          <Link to="/works">
            <KeyboardArrowDownIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
