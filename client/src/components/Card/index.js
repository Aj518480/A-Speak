import React from "react";
import "./style.css"


function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
      <img
          src={props.image}
          alt={props.alt}
          clicked={props.clicked}
          onClick={() => props.handleClick(props.name)}
        />
      </div>
      <p className="cardTitle">{props.name}</p>
    </div>
  );
}

export default Card;
