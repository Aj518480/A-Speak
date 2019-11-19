import React from 'react'
import PlainFooter from '../../components/PlainFooter';
import { Container } from '../../components/Grid';
import Button from "../../components/Buttons";
import { usernameTransfer } from '../../components/Login';
import {
	Link
} from 'react-router-dom';

import API from "../../utils/API";

import Wrapper from "../../components/Wrapper"


const listStyle = {
	color: 'cornflowerblue',
    listStyle: 'none'
};

const btnStyle = {
    backgroundColor: 'green'
};

class NewUserForm extends React.Component {

    state = {
        boards: []
    }

    componentDidMount(){
        API.getUserBoard(usernameTransfer)
                .then(data => {
                    console.log(data)
                    this.setState({
                        boards: data.data[0].boards
                    })
                })
                .catch(err => console.log(err))




    }





	render() {
		return (
            <div>
                <Wrapper>
                <Container>
                <ul style={listStyle}>
                    <li><Link to="/eat"><Button style={btnStyle}>Eat</Button></Link></li>
                    <li><Link to="/play"><Button>Play</Button>
                    </Link></li>
                    <li><Link to="/go"><Button>Go</Button>
                    </Link></li>
                    {this.state.boards.map((item, i)=>(
                    <li><Link key={i} to="/temp"><Button>{item.boardName}</Button>
                    </Link></li>
                    ))}
                    <li><Link to="/uploader"><Button>New</Button>
                    </Link></li>
                </ul>
                </Container>
                </Wrapper>
                <PlainFooter/>
            </div>	
		)
	}
}

export default NewUserForm;