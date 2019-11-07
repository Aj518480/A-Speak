import React, { Component } from 'react';
// import {
// 	Link
// } from 'react-router-dom';
import Card from "../../components/Card";
// import Boards from "../../boards.json"
import Wrapper from "../../components/Wrapper";
import BackButton from "../../components/BackButton"
import PlainFooter from "../../components/PlainFooter";
import Button from "../../components/Buttons";
import UploadForm from "../../components/UploadForm"



class Uploader extends Component {
// 	state = {
// 		selected: null
		
// 	}
handleClick = event =>{
		console.log("Clicked");
		// console.log(event.target.files[0])
		// this.setState({
		// 	selected: event.target.files[0]
		// })
}

handleUpload = () => {
	console.log("uploaded")
}

	render(){
		return(
			<div>
				
			
				
				<Wrapper>

				{/* <input 
				style={{display: "none"}}
				type="file" 
				onChange={this.handleClick}
				ref={fileInput => this.fileInput = fileInput}
				/> */}

					{/* <Card 
                        image={`https://www.pngfind.com/pngs/m/66-661092_png-file-upload-image-icon-png-transparent-png.png`}
						onClick={() => this.fileInput.click()}
					/> */}
					{/* <Button onClick={() => this.fileInput.click()}>Choose Image</Button> */}
					<UploadForm />
					{/* <Button handleUpload={this.handleUpload}>Upload</Button> */}
				</Wrapper>
				<BackButton></BackButton>
				<PlainFooter />
			</div>
		)
	}

}


export default Uploader;