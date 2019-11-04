import React from 'react';
// import LoginForm from '../../components/LoginForm';
import Login from "../../components/Login";
import { Container } from "../../components/Grid";
/*ToDo*/
/**
 * Let's get some styling in here
 */

/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */
class LoginPage extends React.Component {
	render() {
		return (
            <Container>
            <Login />
            </Container>
		)
	}
}

export default LoginPage; 