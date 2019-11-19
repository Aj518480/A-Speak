import React from 'react';
import axios from 'axios';
import "./style.css";
import API from "../../utils/API";
import Card from "../../components/Card";


class Board extends React.Component {

    state = {
        boards: []
    }

    componentDidMount() {
        this.placeBoard();
    }

    placeBoard = () => {
        API.saveBoard()
           .then(res => this.setState({boards: res.data}))
           .catch(err => console.log(err)) 
    }

    getBoard = () => {
        API.getBoard()
           .catch(err => console.log(err)); 
    }  

    makeCard = () => {
        API.saveCard()
           .catch(err => console.log(err)); 
    }   


    render() {
        return (
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
        
        )
    }



}

export default Board;