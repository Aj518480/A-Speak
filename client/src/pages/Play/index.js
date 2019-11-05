import React, { Component } from 'react';
// import {
// 	Link
// } from 'react-router-dom';
import Card from "../../components/Card";
import Boards from "../../boards.json"
import Wrapper from "../../components/Wrapper"
import PlainFooter from "../../components/PlainFooter"
import HeaderGeneral from "../../components/HeaderGeneral"

class Play extends Component {
	state = {
		boards: Boards,
		message: ""
	}
	handleClick = (imgName) => {
		this.setState({
			message: imgName
		})

	}
	render(){
		return(
			<div>
				<HeaderGeneral
					header={Boards.go[0].boardName}
					message={this.state.message}
				/>
				<Wrapper>
				{this.state.boards.play.map(board =>(
					<Card 
						key={board.id}
						id={board.id}
						image={board.image}
						name={board.name}
						grammar={board.grammar}

						handleClick={this.handleClick}
					/>
				))}
				</Wrapper>
				<PlainFooter></PlainFooter>
			</div>
		)
	}

}


export default Play;