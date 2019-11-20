// import React from "react";
// import Board from "../../components/Board";
// import { Container } from "../../components/Grid";


// class BoardPage extends React.Component {
//     render(){
//         return (
//             <Container>
//                 <Board />
//             </Container>
//         )
//     }

// }

// export default BoardPage;


import React, { Component } from 'react';
// import Sound from 'react-sound';
import Card from "../../components/Card";
// import Boards from "../../boards.json";
import Wrapper from "../../components/Wrapper";
import BackButton from "../../components/BackButton"
import PlainFooter from "../../components/PlainFooter";
import HeaderGeneral from "../../components/HeaderGeneral";
import API from "../../utils/API";
import { usernameTransfer } from '../../components/Login';



class NewBoard extends Component {
	state = {
		
		// boards: Boards,
		// message:"",
		// soundStatus: Sound.status.STOPPED,
		currentCard: "",
		message:"" ,
		boards: [],
		cards: []
		
		
		
	}

	// componentDidMount(){
    //     API.getUserBoard(usernameTransfer)
    //             .then(data => {
    //                 console.log(data)
    //                 this.setState({
    //                     boards: data.data[0].boards
    //                 })
    //             })
    //             .catch(err => console.log(err))

    // }
	componentDidMount(){
        API.getCards(usernameTransfer)
                .then(data => {
                    console.log(data)
                    this.setState({
                        cards: data.data[0].cards
                    })
                })
                .catch(err => console.log(err))

    }

	
	// handleClick = (imgName, id) => {
	// 	for (let i = 0; i < boards.length; i++) {
	// 		if (id === boards[i]._id){
	// 			let choosenCard = boards[i]
	// 			this.setState({
	// 				currentCard: choosenCard,
					
	// 			})
	// 		}
	// 	}
	// 	// console.log(this.state.currentCard)
	// 	this.setState({
	// 		message: imgName,
	// 		//soundStatus: Sound.status.PLAYING,
			
	// 	});
		
		

	// }

	render(){
		return(
			<div>
				
				<HeaderGeneral />
				
				
				<Wrapper>
				{this.state.boards.cards.map(card =>(
					
					
					<Card 
					
						key={card.id}
						id={card.id}
						image={card.image}
						title={card.title}
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


export default NewBoard;