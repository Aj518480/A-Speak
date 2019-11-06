import React from "react";
import Sound from 'react-sound';
import "./style.css"


function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
      <img
          src={props.image}
          alt={props.alt}
          clicked={props.clicked}
          onClick={() => props.handleClick(props.grammar, props.id)}
        />
        <Sound
        url={props.sound}
        playStatus={props.soundStatus}
        />
      </div>
      <p className="cardTitle">{props.name}</p>
    </div>
  );
}

export default Card;
