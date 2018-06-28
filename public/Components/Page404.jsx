import React, { Component } from "react";
import { render } from "react-dom";
import "../css/Page404.css";
const Page404 = () => (
  <div id="main">
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Apologies from Nimesh</title>

    {/* <style media="screen" /> */}
    {/* <body> */}
    <div id="message">
      <h2>404</h2>
      <h1>Page Not Found</h1>
      <p>
        The specified file was not found on this website. Please check the URL
        for mistakes and try again.
      </p>
    </div>
    {/* </body> */}
  </div>
);

export default Page404;
