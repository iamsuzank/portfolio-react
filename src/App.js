import react, { useState } from "react";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import "./app.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="sections">
          <Route path="/" exact component={Home} />
          <Switch>
            <Route path="/intro" component={Intro} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/works" component={Works} />
            <Route path="/testimonials" component={Testimonials} />
            <Route path="/contact" component={Contact} />
            <Route path="/nav" component={Navbar}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
