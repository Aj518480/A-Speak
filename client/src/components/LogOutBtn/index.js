import React, { Component } from "react";
import {
	Link
} from 'react-router-dom';
import "./style.css";

class LogOutBtn extends Component {


    render() {
        return(
            <div>
               <Link to="/">
                    <button className="logoutLblPos">
                <label name="submit2" type="submit" id="submit2" value="log out">
                    </label>
                    Logout
                    </button>
                </Link> 
            </div>  
        )
    }
}


export default LogOutBtn;