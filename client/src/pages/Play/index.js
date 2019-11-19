import React, { Component } from 'react';
// import {
// 	Link
// } from 'react-router-dom';
import Sound from 'react-sound';
import Card from "../../components/Card";
import Boards from "../../boards.json"
import Wrapper from "../../components/Wrapper"
import BackButton from "../../components/BackButton"
import PlainFooter from "../../components/PlainFooter"
import HeaderGeneral from "../../components/HeaderGeneral"


class Play extends Component {
	state = {
		boards: Boards,
		message: "",
		soundStatus: Sound.status.STOPPED,
		currentCard: ""
	}

	handleClick = (imgName, id) => {
		for (let i = 0; i < Boards.play.length; i++) {
			if (id === Boards.play[i].id){
				let choosenCard = Boards.play[i]
				this.setState({
					currentCard: choosenCard
				})
			}
		}
		console.log(this.state.currentCard)
		this.setState({
			message: imgName,
			soundStatus: Sound.status.PLAYING
		})

	}
	render(){
		return(
			<div>
				<HeaderGeneral
					message={this.state.message}
					alt={this.state.currentCard.alt}
				/>
				<Wrapper>
				{this.state.boards.play.map(board =>(
					<Card 
						key={board.id}
						id={board.id}
						image={board.image}
						name={board.name}
						grammar={board.grammar}
						sound={this.state.currentCard.sound}
						soundStatus={this.state.soundStatus}
						handleClick={this.handleClick}
					/>
				))}
				
				</Wrapper>
				<BackButton></BackButton>
				<PlainFooter></PlainFooter>
			</div>
		)
	}

}


export default Play;