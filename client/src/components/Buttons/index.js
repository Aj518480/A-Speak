import React, { Component } from "react";
import "./style.css";

class Button extends Component {


    render() {
        return(
            <div>
                <button type="button" className="btn btn-outline-primary btn-rounded waves-effect">{this.props.children}</button>
                {/* <button type="button" className="btn btn-outline-info btn-rounded waves-effect">Sign Up</button> */}
            </div>  
        )
    }
}


export default Button;