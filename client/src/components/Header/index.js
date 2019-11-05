import React from "react";
import "./style.css"




function Header(props) {
  return (
    <div className="text-center header">
      <h1 className="headerText">"I want {props.message}"</h1>
    </div>
  );
  // <h1 className="headerText">"I want {props.header} {props.message}"</h1>
}

export default Header;