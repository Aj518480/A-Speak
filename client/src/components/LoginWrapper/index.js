import React from "react";
import "./style.css";

function LoginWrapper(props) {
  return <div className="loginWrapper">{props.children}</div>;
}

export default LoginWrapper;