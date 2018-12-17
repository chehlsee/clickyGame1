import React from "react";
import "./style.css";

// function Wrapper that takes in the argument props and will return all of the props.children information

function Wrapper(props) {
  return <div className="wrapper">
  {props.children}
  </div>
};

export default Wrapper;

