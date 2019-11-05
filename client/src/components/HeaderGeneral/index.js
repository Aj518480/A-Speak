import React from "react";
import "./style.css"




function HeaderGeneral(props) {
  return (
    <div className="text-center header">
      <h1 className="headerText">"I want to {props.message}"</h1>
    </div>
  );

}

export default HeaderGeneral;