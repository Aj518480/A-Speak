import React, { Component } from 'react';
// import {
// 	Link
// } from 'react-router-dom';
import Card from "../../components/Card";
import Boards from "../../boards.json"
import Wrapper from "../../components/Wrapper"


class Go extends Component {
	state = {
		boards: Boards
	}
	render(){
		return(
			<div>
				<Wrapper>
				{this.state.boards.go.map(board =>(
					<Card 
						key={board.id}
						id={board.id}
						image={board.image}
						name={board.name}
						// handleClick={this.handleClick}
					/>
				))}
				</Wrapper>
			</div>
		)
	}

}


export default Go;
