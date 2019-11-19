import React from "react";
import "./style.css";

function ButtonWrapper(props) {
  return <div className="buttonWrapper">{props.children}</div>;
}

export default ButtonWrapper;
