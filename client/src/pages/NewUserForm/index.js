import React from 'react'
import PlainFooter from '../../components/PlainFooter'

class NewUserForm extends React.Component {
	render() {
		return (
            <div>
                <Nav></Nav>
                <Jumbotron>
                <Form></Form>
                </Jumbotron>
                <PlainFooter/>
            </div>	
		)
	}
}

export default NewUserForm;