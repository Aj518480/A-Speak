import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
    withRouter,
    Link
} from 'react-router-dom';
import LogOutBtn from "../LogOutBtn"
import "./style.css";




function Navbar() {

    return (
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-primary">
           
                <Link className="navbar-brand" to="/new_user">
                    
                    <img src="https://pngimage.net/wp-content/uploads/2018/05/autism-puzzle-piece-png-3.png" height="30" className="d-inline-block align-top"
                    alt="mdb logo" />A-Speak</Link>
            <LogOutBtn></LogOutBtn>
            </nav>
           
        </div>
    )
}

export default Navbar;