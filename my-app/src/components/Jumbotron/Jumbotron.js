// always import react first
import React from "react";
import "../Jumbotron/Jumbotron.css";

const Jumbotron = (props) => (
  <header className="header">
  <h1>
    {props.printResult}<h2>Chehlsee's Clicky Game!</h2>
    <h3>Rules: Click on each image only once!</h3>
    </h1>
    </header>
);

// need to export or else it will not render
export default Jumbotron;