import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "../Components/App.jsx";
import Page404 from "../Components/Page404.jsx";

class Home extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route component={Page404} />
        </Switch>
      </Router>
    );
  }
}

render(<Home />, document.getElementById("root"));
