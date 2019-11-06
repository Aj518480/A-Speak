import React, { Component } from 'react';
// import {
// 	Link
// } from 'react-router-dom';
import Sound from 'react-sound';
import Card from "../../components/Card";
import Boards from "../../boards.json";
import Wrapper from "../../components/Wrapper";
import PlainFooter from "../../components/PlainFooter";
import HeaderGeneral from '../../components/HeaderGeneral';


class Go extends Component {
	state = {
		boards: Boards,
		message: "",
		soundStatus: Sound.status.STOPPED,
		currentCard: ""
	}
	handleClick = (imgName, id) => {
		for (let i = 0; i < Boards.go.length; i++) {
			if (id === Boards.go[i].id){
				let choosenCard = Boards.go[i]
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
	render() {
		return (
			<div>
				<HeaderGeneral
					header={Boards.go[0].boardName}
					message={this.state.message}
				/>
				<Wrapper>
					{this.state.boards.go.map(board => (
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
				<PlainFooter></PlainFooter>
			</div>
		)
	}

}


export default Go;
