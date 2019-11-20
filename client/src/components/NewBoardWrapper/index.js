import React from "react";
import "./style.css";

function NewBoardWrapper(props) {
  return <div className="newBoardWrapper">{props.children}</div>;
}

export default NewBoardWrapper;