import React, { Component } from 'react';
import "./style.css";
import {
	Link, Redirect
} from 'react-router-dom';
import Card from "../../components/Card";
// import Boards from "../../boards.json"
import Wrapper from "../../components/Wrapper";
import BackButton from "../../components/BackButton"
import PlainFooter from "../../components/PlainFooter";
import Button from "../../components/Buttons";
import UploadForm from "../../components/UploadForm"

import { usernameTransfer } from '../../components/Login';
import API from '../../utils/API';

let boardId = ""

class Uploader extends Component {
	state = {
		boardName: ""
		
	}
handleClick = event =>{
		console.log("Clicked");
		// console.log(event.target.files[0])
		// this.setState({
		// 	selected: event.target.files[0]
		// })
}


// handleUpload = () => {
// 	console.log("uploaded")
// }


/////*********************************************************** */

handleChange = (event) => {
	const {name, value} = event.target
	 this.setState({
		 [name]: value
	 })

 }

 routeChange() {
	let path = "/uploader/card";
	this.props.history.push(path);
}

 onSubmit = (event) => {
	event.preventDefault()

	const boardData = {
		boardName: this.state.boardName
	}
	
	API.saveBoard(usernameTransfer, boardData)
	.then(data => {
		console.log("Data sent")
		console.log(data.data.boardData.boardData._id)
		boardId = data.data.boardData.boardData._id;

		this.routeChange()
	})
	.catch(err => console.log(err))

	this.setState({
		boardName: "" 
	})


}

///************************************************************************************ */
	render(){
		return(
			<div>
				<Wrapper>
					<div className="boardDiv">
						<h3 className="boardName">Create a new Board</h3>
						<form>
                            <div className="form-group">
                                <label htmlFor="inputText"></label>
                                <input 
                                name="boardName"
                                onChange={this.handleChange}
                                value={this.state.boardName}
                                type="text" 
                                className="form-control" 
                                id="inputText" 
                                aria-describedby="input" 
                                placeholder="Enter Board Name"/>
                            </div>
                            
                            <button type="submit" onClick={this.onSubmit} className="btn btn-primary">Submit</button>
                        </form>
						</div>
					{/* <Card 
                        image={`https://www.pngfind.com/pngs/m/66-661092_png-file-upload-image-icon-png-transparent-png.png`}
						onClick={() => this.fileInput.click()}
					/> */}
					{/* <Button onClick={() => this.fileInput.click()}>Choose Image</Button> */}
					{/* <UploadForm /> */}
					{/* <Button handleUpload={this.handleUpload}>Upload</Button> */}
				</Wrapper>
				<BackButton></BackButton>
				<PlainFooter />
			</div>
		)
	}

}


export { Uploader, boardId };