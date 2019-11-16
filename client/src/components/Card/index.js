import React from "react";
import Sound from 'react-sound';
import styled, { keyframes } from 'styled-components';
import { flipInX } from 'react-animations';
import "./style.css"


const flipAnimation = keyframes`${flipInX}`;
 
const FlipDiv = styled.div`
  animation: 2s ${flipAnimation};
`;

function Card(props) {
  return (
    <FlipDiv>
    <div className="card">
      
      <div className="img-container">
      
      <img
          src={props.image}
          alt={props.alt}
          clicked={props.clicked}
          // onClick={() => props.handleClick(props.name)}
          onClick={() => props.handleClick(props.grammar, props.id)}
        />
        
        <Sound
        url={props.sound}
        playStatus={props.soundStatus}
        />
      </div>
      <p className="cardTitle">{props.name}</p>
      
    </div>
    </FlipDiv>
  );
}

export default Card;
