import React, { Component } from 'react';
// import {
// 	Link
// } from 'react-router-dom';
import Card from "../../components/Card";
// import Boards from "../../boards.json"
import Wrapper from "../../components/Wrapper"
import PlainFooter from "../../components/PlainFooter"

class Uploader extends Component {
// 	state = {
// 		boards: Boards,
// 		message:"" 
		
// 	}
handleClick = () =>{
	return (
        console.log("Clicked")
        
    )
}

	render(){
		return(
			<div>
				
			
				
				<Wrapper>
					<Card 
                        image={`https://www.pngfind.com/pngs/m/66-661092_png-file-upload-image-icon-png-transparent-png.png`}
                        handleClick={this.handleClick}
                    />
				</Wrapper>
				<PlainFooter />
			</div>
		)
	}

}


export default Uploader;