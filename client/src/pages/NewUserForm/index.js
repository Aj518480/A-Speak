import React from 'react'
import PlainFooter from '../../components/PlainFooter';
import { Container } from '../../components/Grid';
import Button from "../../components/Buttons";
import {
	Link
} from 'react-router-dom';

const listStyle = {
	color: 'cornflowerblue',
    listStyle: 'none'
};

const btnStyle = {
    backgroundColor: 'green'
};

class NewUserForm extends React.Component {
	render() {
		return (
            <div>
                
                <Container>
                <ul style={listStyle}>
                    <li><Link to="/eat"><Button style={btnStyle}>Eat</Button></Link></li>
                    <li><Link to="/play"><Button>Play</Button>
                    </Link></li>
                    <li><Link to="/go"><Button>Go</Button>
                    </Link></li>
                    <li><Link to="/uploader"><Button>New</Button>
                    </Link></li>
                </ul>
                </Container>
                
                <PlainFooter/>
            </div>	
		)
	}
}

export default NewUserForm;