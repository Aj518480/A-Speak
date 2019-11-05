import React, { Component } from 'react';
// import {
// 	Link
// } from 'react-router-dom';
import Card from "../../components/Card";
import Boards from "../../boards.json"
import Wrapper from "../../components/Wrapper"


class Eat extends Component {
	state = {
		boards: Boards
	}
	render(){
		return(
			<div>
				<Wrapper>
				{this.state.boards.eat.map(board =>(
					<Card 
						key={board.id}
						id={board.id}
						image={board.image}
						// handleClick={this.handleClick}
					/>
				))}
				</Wrapper>
			</div>
		)
	}

}


export default Eat;