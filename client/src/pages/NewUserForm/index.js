import React from 'react'
import PlainFooter from '../../components/PlainFooter';
import { Container } from '../../components/Grid';
import {
	Link
} from 'react-router-dom';
import ButtonWrapper from '../../components/ButtonWrapper';
import "./style.css"


class NewUserForm extends React.Component {
	render() {
		return (
            <div>
                <ButtonWrapper>
                <Container>
                
                    <Link to="/eat"><button className="btn btn-rounded btn-success btn-lg">Eat<i className="fas fa-puzzle-piece pl-4"></i></button></Link>
                    <br></br>
                    <Link to="/play"><button className="btn btn-rounded btn-danger btn-lg">play<i className="fas fa-puzzle-piece pl-4"></i></button>
                    </Link>
                    <br></br>
                   
                    <Link to="/go"><button className="btn btn-rounded btn-warning btn-lg">Go<i className="fas fa-puzzle-piece pl-5"></i></button>
                    </Link>
                    <br></br>
                    <Link to="/uploader"><button className="btn btn-rounded btn-info btn-lg ">new<i className="fas fa-puzzle-piece pl-5 "></i></button>
                    </Link>
                
                </Container>
                </ButtonWrapper>
                <PlainFooter/>
            </div>	
		)
	}
}

export default NewUserForm;