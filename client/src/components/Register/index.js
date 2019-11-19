import React from 'react';
import RegisterForm from "../RegisterForm";
import { Container } from "../Grid";
import PlainFooter from "../PlainFooter"
import LoginWrapper from "../LoginWrapper"
//The component for doing the actual signup of the User
class Register extends React.Component {
	state = {
		redirectToReferrer: false
	}

	register = (data) => {
		fetch('api/users/register', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include'
		})
		.then((response) => {
			if (response.status === 200) {
				console.log('Succesfully registered user!');
			}
		})
		.catch((err) => {
			console.log('Error registering user.', err);
		});
	}

	render() {
		return (
			<div>
				<LoginWrapper>
				<Container>
				<h4>Register a New User</h4>
				<RegisterForm onRegister={this.register} />
				</Container>
				</LoginWrapper>
				<PlainFooter></PlainFooter>
			</div>
		)
	}
}

export default Register