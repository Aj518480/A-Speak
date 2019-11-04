import React from 'react';
import {
	Link
} from 'react-router-dom';
import Button from "../../components/Buttons";
import { Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Footer from "../../components/Footer";





/*ToDo*/
/**
 * Let's get some styling in here
 */

 const listStyle = {
	color: 'cornflowerblue',
	listStyle: 'none'
};

/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */
class Landing extends React.Component {
    render() {
        return (
            <div>
                {/* <h3>This is a Public Page Here</h3>
                <p>Anyone can see this content</p> */}
                <Container>
                <Jumbotron />
                <ul style={listStyle}>
                    <li><Link to="/login"><Button>Log In</Button></Link></li>
                    {/* <li><Link to="/protected">Protected Page</Link></li> */}
                    <li><Link to="/register"><Button>Sign Up</Button>
                    </Link></li>
                </ul>
                </Container>

                <Footer/>
            </div>
        )
    }
}

export default Landing;