import React, {component} from "react";
import "../Navbar/Style.css";


const Navbar = props => (

  <nav className="navbar navbar-toggler navbar-light">
  
  <ul>
    <li className="Left"> Chehlsee's Clicky Game</li>
    <li className="Right">Score: {props.score}</li>
    <li className="Right">highScore: {props.highScore}</li>
  </ul>
  </nav>
);

export default Navbar;