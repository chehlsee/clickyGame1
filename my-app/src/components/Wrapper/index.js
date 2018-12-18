import React from "react";
import "../Wrapper/Style.css";

// function Wrapper that takes in the argument props and will return all of the props.children information
// similar to 16-stu in class assignment
function Wrapper(props) {
  return <div className="Wrapper">
  {props.children}
  </div>
};

export default Wrapper;
export {default} from "../Wrapper";

