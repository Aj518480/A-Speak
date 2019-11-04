import React, { Component } from 'react';
// import {
// 	Link
// } from 'react-router-dom';
import Card from "../../components/Card";
import Boards from "../../boards.json"


class Go extends Component {
	state = {
		boards: Boards
	}
	render(){
		return(
			<div>
				{this.state.boards.go.map(board =>(
					<Card 
						key={board.id}
						id={board.id}
						image={board.image}
						// handleClick={this.handleClick}
					/>
				))}
			</div>
		)
	}

}


export default Go;
