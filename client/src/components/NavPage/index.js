import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
    withRouter,
    Link
} from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
import "./style.css";

const bounceAnimation = keyframes`${bounce}`;
 
const BouncyDiv = styled.div`
  animation: s ${bounceAnimation};
`;


function Navbar() {

    return (
        <div>
            <BouncyDiv>
            <nav className="navbar navbar-expand-lg navbar-primary">

                <Link className="navbar-brand" to="/new_user">
                    
                    <img src="https://pngimage.net/wp-content/uploads/2018/05/autism-puzzle-piece-png-3.png" height="30" className="d-inline-block align-top"
                    alt="mdb logo" />A-Speak</Link>
                
            </nav>
            </BouncyDiv>
        </div>
    )
}

export default Navbar;