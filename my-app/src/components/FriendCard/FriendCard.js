import React from "react";

import "../FriendCard/Style.css";

// set props for FriendCard
const FriendCard = props => (
  <div className="container">
  <div className="card" onClick={props.userClick}>
  <div className="image-container">
  <img alt={props.name}src={props.image} />

  {/* similar to stu-friendrefactor in class */}
  <div className="content">
  <ul>
    <li>
      <strong>Name:</strong> {props.name}
    </li>
    <li>
      <strong>High Score:</strong> {props.highScore};
    </li>
    <li>
      <strong>Score:</strong> {props.newScore};
    </li>
  </ul>
  </div>
  {/* remove */}
 <span onClick={() => props.removeFriend(props.id)} className="remove"> 
  </span>
  </div>
  </div>
  </div>
);

export default FriendCard;
export {default} from "../FriendCard";

