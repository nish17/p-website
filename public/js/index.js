import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "../Components/App.jsx";
import AboutMe from "../Components/AboutMe.jsx";
import Resume from "../Components/Resume.jsx";
import Contact from "../Components/Contact.jsx";
import NavBar from "../Components/NavBar.jsx";
import Page404 from "../Components/Page404.jsx";

class Home extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/about" component={AboutMe} />
            <Route path="/resume" component={Resume} />
            <Route path="/contact" component={Contact} />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

render(<Home />, document.getElementById("root"));
