import React from "react";
import "../Title/Style.css";

const Title = props => <h1 className="Title">
{props.children}
</h1>;

export default Title;
export {default} from "../Title";

