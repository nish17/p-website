import React, { Component } from "react";
import { render } from "react-dom";
import "../css/styles.css";
const App = () => (
  <div>
    <main>
      <title>Nimesh Solanki</title>
      <div className="intro">Hello, I'm Nimesh!</div>
      <div className="tagline">
        All-Star Dev | Code Fanatic | Competitive Programmer | Tech-Geek
      </div>
      {/* <!-- Find your icons from here - https://fontawesome.com/icons?d=gallery&s=brands --> */}
      <div className="icons-social">
        <a target="_blank" href="https://github.com/nish17">
          <i className="fab fa-github" />
        </a>
        <a target="_blank" href="https://twitter.com/NimeshS17">
          <i className="fab fa-twitter" />
        </a>
        <a
          target="_blank"
          href="https://stackoverflow.com/users/5539913/nish17"
        >
          <i className="fab fa-stack-overflow" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/nish17">
          <i className="fab fa-linkedin" />
        </a>
        <a target="_blank" href="https://www.freecodecamp.org">
          <i className="fab fa-free-code-camp" />
        </a>
      </div>
    </main>
  </div>
);

// render(<App />, document.getElementById('app'));
export default App;
