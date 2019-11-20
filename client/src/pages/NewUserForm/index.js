import React from 'react'
import PlainFooter from '../../components/PlainFooter';
import { Container } from '../../components/Grid';

import {
	Link
} from 'react-router-dom';
import ButtonWrapper from '../../components/ButtonWrapper';
import styled, { keyframes } from 'styled-components';
import { bounceInLeft } from 'react-animations';
import { bounceInRight } from 'react-animations';
import API from "../../utils/API";
import { usernameTransfer } from '../../components/Login';
import "./style.css"
 
const bounceInLeftAnimation = keyframes`${bounceInLeft}`;
 
const BounceInLeft = styled.div`
  animation: 1s ${bounceInLeftAnimation};
`;
const bounceInRightAnimation = keyframes`${bounceInRight}`;
 
const BounceInRight = styled.div`
  animation: 1s ${bounceInRightAnimation};
`;



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
                <ButtonWrapper>
                <Container>


                <BounceInLeft>
                    <Link to="/eat"><button className="btn btn-rounded btn-success btn-lg">Eat<i className="fas fa-puzzle-piece pl-4"></i></button></Link>
                    <br></br>
                </BounceInLeft>

                <BounceInRight>
                    <Link to="/play"><button className="btn btn-rounded btn-danger btn-lg">play<i className="fas fa-puzzle-piece pl-4"></i></button>
                    </Link>
                    <br></br>
                </BounceInRight>

                <BounceInLeft>  
                    <Link to="/go"><button className="btn btn-rounded btn-warning btn-lg">Go<i className="fas fa-puzzle-piece pl-5"></i></button>
                    </Link>
                    <br></br>
                </BounceInLeft>

                <BounceInRight>
                {this.state.boards.map((item, i)=>(
                    <li><Link key={i} to="/temp"><button className="btn btn-rounded btn-info btn-lg ">{item.boardName}<i className="fas fa-puzzle-piece pl-5 "></i></button>
                    </Link></li>
                    ))}
                </BounceInRight>

                <BounceInLeft>
                    <Link to="/uploader"><button className="btn btn-rounded btn-info btn-lg ">new<i className="fas fa-puzzle-piece pl-5 "></i></button>
                    </Link>
                </BounceInLeft>
                
                </Container>
                </ButtonWrapper>
                <PlainFooter/>
            </div>	
		)
	}
}

export default NewUserForm;