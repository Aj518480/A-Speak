import React, { Component } from 'react';
import CardWrapper from "../../components/CardWrapper"
import Sound from 'react-sound';
import Card from "../../components/Card";
import Boards from "../../boards.json";
import Wrapper from "../../components/Wrapper";
import BackButton from "../../components/BackButton"
import PlainFooter from "../../components/PlainFooter";
import HeaderGeneral from "../../components/HeaderGeneral";



class Eat extends Component {
	state = {
		
		boards: Boards,
		message:"",
		soundStatus: Sound.status.STOPPED,
		currentCard: "",
		message:"" ,
		
		
		
	}
	
	handleClick = (imgName, id) => {
		for (let i = 0; i < Boards.eat.length; i++) {
			if (id === Boards.eat[i].id){
				let choosenCard = Boards.eat[i]
				this.setState({
					currentCard: choosenCard,
					
				})
			}
		}
		// console.log(this.state.currentCard)
		this.setState({
			message: imgName,
			soundStatus: Sound.status.PLAYING,
			
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
				
				{this.state.boards.eat.map(board =>(
					
					<CardWrapper>
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
					</CardWrapper>
				))}
				
				</Wrapper>
				
				
				<BackButton></BackButton>
				<PlainFooter></PlainFooter>
			</div>
		)
	}

}


export default Eat;