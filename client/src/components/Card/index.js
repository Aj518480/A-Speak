import React from "react";
import Sound from 'react-sound';
import styled, { keyframes } from 'styled-components';
import { flipInX } from 'react-animations';
import posed from 'react-pose';
import "./style.css"




const Box = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
    
  },
  hover: {
    scale: 1.2,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
    
  },
  press: {
    scale: 1.1,
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
    
  }
});




const flipAnimation = keyframes`${flipInX}`;
 
const FlipDiv = styled.div`
  animation: 2s ${flipAnimation};
`;


function Card(props) {
  return (
    <FlipDiv>
    <Box>
    <div className="card">
      
      <div className="img-container">
      
      <img
          src={props.image}
          alt={props.alt}
          clicked={props.clicked}
          // onClick={() => props.handleClick(props.)}
          title={props.title}
          onClick={() => props.handleClick(props.grammar, props.id)}
        />
        
        <Sound
        url={props.sound}
        playStatus={props.soundStatus}
        />
      </div>
      <p className="cardTitle">{props.name}</p>
      
    </div>
    </Box>
    </FlipDiv>
  );
}

export default Card;
