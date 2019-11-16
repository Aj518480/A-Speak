import React from "react";
// import styled, { keyframes } from 'styled-components';
// import { rollIn } from 'react-animations';
import "./style.css"

 
// const bounceAnimation = keyframes`${rollIn}`;
 
// const BouncyDiv = styled.div`
//   animation: 3s ${bounceAnimation};
// `;




function HeaderGeneral(props) {
  return (
    
    <div className="text-center header">
      <h1 className="headerText">"I want to {props.message}
      <span className="itemChanged">{props.alt}</span></h1>
    </div>
    
  );

}

export default HeaderGeneral;