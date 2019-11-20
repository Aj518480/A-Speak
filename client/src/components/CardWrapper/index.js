import React from "react";
import "./style.css";

function CardWrapper(props) {
  return <div className="cardWrapper">{props.children}</div>;
}

export default CardWrapper;