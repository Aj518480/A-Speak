import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return( 
  <div className="jumbotron mt-4">{children}
  <p className="aboutASpeak">A-Speak application to assist individuals that are non-verbal or that have speech hurdles that would like to be addressed without breaking the bank.  We hope to address the problems with the existing application like ours that it will be personalize to the child or the individual.</p>
  </div>
  )
}

export default Jumbotron;
