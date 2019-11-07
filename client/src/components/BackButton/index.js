import React, { Component } from "react";
import {
	Link
} from 'react-router-dom';
import "./style.css";

class BackButton extends Component {


    render() {
        return(
            <div>
                <Link to="/new_user"><button className="backButton fas fa-arrow-circle-left"></button></Link>
            </div>  
        )
    }
}


export default BackButton;