import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
      <img
          src={props.image}
          alt={props.alt}
          clicked={props.clicked}
          onClick={() => props.handleClick(props.id)}
        />
      </div>
    </div>
  );
}

export default Card;
