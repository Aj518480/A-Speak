import React from "react";
import axios from "axios";
import "./style.css";

import Wrapper from "../../components/Wrapper";
import BackButton from "../../components/BackButton"
import PlainFooter from "../../components/PlainFooter";
import { usernameTransfer } from '../../components/Login';
import { boardId } from "../../pages/Uploader"
import API from "../../utils/API";
import NewBoardWrapper from "../NewBoardWrapper";


class UploadForm extends React.Component {
    // form: null;
    // username: null;
    // password: null;
            state = {
                title: "",
                image: "",
                file: "",
                filename: "Choose a File",
                uploadedFile: {},
                message: "",
                boardTitle: "",
                cards: []
            }

            componentDidMount(){
                this.getBoard()
            }

            //Card name text(grabbing this information)
            onChangeForm = (e) => {
            const { name, value } = e.target;
            this.setState({
                [name]: value
            })
            }

            //Upload file (image)(grabbing this information)
            onChange2 = e => {
        
                this.setState({
                    file: e.target.files[0],
                    filename: e.target.files[0].name
                })
        
            }
            //Making a path for the file or image being uploaded
            onSubmit = async e => {
                e.preventDefault()
                const formData = new FormData();
                formData.append("file", this.state.file);
        
                axios.post("/upload", formData)
                .then(res=> {
                    const { fileName, filePath } = res.data;
                    this.setState({
                        uploadedFile: {
                            fileName: fileName,
                            filePath: filePath,
                        },
                        message: "File Uploaded"
                    })
                    

                })
               .catch(err => {
                    if(err.response.status === 500){
                        this.setState({
                            message: "There was a problem with the server"
                        })
                    } else {
                        console.log(err.response.data.msg)
                        this.setState({
                            message: err.response.data.msg
                        })
                    }
                })
        
            }
            
            getBoard = () => {  
                API.getBoard(boardId)
                .then(data => {
                    console.log(data)
                    this.setState({
                        boardTitle: data.data.boardName,
                        cards: data.data.cards
                    })
                })
                .catch(err => console.log(err))
               
            }
            
            addCard = () => {

                let cardData = {
                    title:this.state.title,
                    image: this.state.uploadedFile.filePath
                }
                console.log(boardId)
                API.saveCard(boardId, cardData)
                .then(data=>{
                    console.log(data)
                    this.getBoard()
                })
                .catch(err=>console.log(err))

            }

    render() {
        return (
            <div>
                <NewBoardWrapper>
                        
                            <div className ="row mt-4">
                               
                                <form onSubmit={this.onSubmit}>
                                    <h3 className="cardsForBoard">Cards for Board "{this.state.boardTitle}" </h3> 
                                    <br></br>
                                    <div className="custom-file mb-4">
                                        <input type="file" className="custom-file-input" value={this.state.image} name="image" id="customFile" onChange={this.onChange2} />
                                        <label className="custom-file-label" htmlFor="customFile">{this.state.filename}</label>
                                    </div>
                                    <input
                                        type="text"
                                        name="title"
                                        onChange={this.onChangeForm}
                                        value={this.state.title}
                                        id="cardNameTitle" 
                                        className="form-control" 
                                        placeholder="Card Name" />

                                    <input type="submit" value="upload" className="btn btn-primary btn-block mt-4"/>
                                </form>
                                <div className="col"></div>
                                <div className="card">
                                    <div className="img-container">
                                        <img style={{ width:"100%" }} src={this.state.uploadedFile.filePath} alt=""/>
                                    </div>
                                <p className="cardTitle">{ this.state.title } </p>
                                </div>
                                <div className="col">
                                <button type="addCard" value="Card" className="btn btn-primary btn-block mt-4" onClick={this.addCard}> Add + </button>
                                </div>
                            </div>
                            <div className ="row mt-4">
                                <div className="col-12">
                                    {/* {this.state.card} */}
                                </div>
                            </div>
                            <div className ="row mt-4">
                                <div className="col-12">
                                    {this.state.cards.map(item=>(
                                        <div className="card">
                                            <div class="img-container">
                                            <img src={item.image} alt="card image"/>
                                            </div>
                                            <p class="cardTitle">{item.title}</p>
                                        </div>

                                    ))}
                                </div>
                            </div>
                        
             </NewBoardWrapper>
                <BackButton></BackButton>
                <PlainFooter />
                </div>

            //     <input
            //         type="text"
            //         name="title"
            //         onChange={this.onChangeForm}
            //         value={this.state.title}
            //         id="cardNameTitle" 
            //         className="form-control" 
            //         placeholder="Card Name" />

            //     <input type="submit" value="upload" className="btn btn-primary btn-block mt-4"/>
            // </form>

            // <div className="col"></div>

            // <div classname="bob">
            // <div className="card">
            //     <div className="img-container">
            //         <img
            //             style={{ width:"100%" }} src={this.state.uploadedFile.filePath} alt=""/>
            
            // {/* <div className="col-md-5 m-auto">
            
            // <img style={{ width:"50%" }} src={this.state.uploadedFile.filePath} alt=""/> */}
            // </div>
            // <p className="cardTitle">{ this.state.title } </p>
            // </div>
            // <div className="col">
            // <button type="addCard" value="Card" className="btn btn-primary btn-block mt-4" onClick={this.addCard}> Add + </button>
            // </div>
            // {/* <div className="col-md-5 m-auto">
            // <h3 className="text-center">{ this.state.title }</h3>
            // <img style={{ width:"50%" }} src={this.state.uploadedFile.filePath} alt=""/>
            // </div> */}
            // </div>
            // </div>
            // </div>
           



                )
            }
        }
            
export default UploadForm;