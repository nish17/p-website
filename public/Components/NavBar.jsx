import React, { Component } from "react";
import { withRouter } from "react-router-dom";

// const NavBar = () => (
// );

class NavBar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  clicked(element) {
    this.setState({});
  }

  // toggle;

  render() {
    const path = this.props.location.pathname;
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/resume">
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      // <!-- Black with white text -->
      // ...</nav>
    );
  }
}

/*     return (
  <div>
  <nav className="navbar navbar-default">
  <div className="container-fluid">
  <div className={path === "/" ? "active" : null}>
  <a className="navbar-brand" href="/">
  Home
  </a>
  </div>
  <ul className="nav navbar-nav">
  <li className={path === "/about" ? "active" : null}>
  <a href="/about">About me</a>
  </li>
  <li className={path === "/resume" ? "active" : null}>
  <a href="/resume">Resume</a>
  </li>
  <li className={path === "/contact" ? "active" : null}>
  <a href="wwmailto:nimesh3536@gmail.com" target="_blank">
  Contact
  </a>
  </li>
  </ul>
  </div>
  </nav>
  </div>
); */

export default withRouter(NavBar);
