import React, { Component } from 'react';
// import {
// 	Link
// } from 'react-router-dom';
import Card from "../../components/Card";
import Boards from "../../boards.json"
import Wrapper from "../../components/Wrapper"
import PlainFooter from "../../components/PlainFooter"


class Play extends Component {
	state = {
		boards: Boards
	}
	render(){
		return(
			<div>
				<Wrapper>
				{this.state.boards.play.map(board =>(
					<Card 
						key={board.id}
						id={board.id}
						image={board.image}
						name={board.name}
						// handleClick={this.handleClick}
					/>
				))}
				</Wrapper>
				<PlainFooter></PlainFooter>
			</div>
		)
	}

}


export default Play;