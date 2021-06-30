import { useState, useEffect } from "react";
import "./portfolio.scss";
import PortfolioList from "./PortfolioList";
import { featuredAPP, AIAPP, webAPP, mobileAPP } from "../../data/data";
import { ExpandMore } from "@material-ui/icons";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

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
        break;

      case "web":
        setData(webAPP);
        break;

      case "mobile":
        setData(mobileAPP);
        break;

      case "AI":
        setData(AIAPP);
        break;

      default:
        setData(featuredAPP);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <div className="upper">
        <h1>Portfolio</h1>
        <ul>
          {list.map((item) => (
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>
        <div className="container">
          {data.map((apps) => (
            <div className="item">
              <img src={apps.img} alt="apps.title" />
              <h3>{apps.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
