import React, { Fragment } from 'react'
import API from "../utils/API"
import {Login, userNameTransfer} from "../components/Login";
import Message from "./Message"
import axios from "axios"

class FileUpload extends React.Component {
   
    state = {
        item: "",
        image: "",
        user: [],
        list: [],
        file: "",
        filename: "Choose a File",
        uploadedFile: {},
        message: ""

    }

    componentDidMount(){
        this.getUserInfo();
    }
    
    getUserInfo = () => {
        API.getUser(userNameTransfer)
        .then(data=> {
            console.log(data.data.list);  
            this.setState({
                user: data
            })
            console.log(this.state.user.data.list); 
        })
        .catch(err => console.log(err));
    }

    onChange1 = e => {
        this.setState({
            item: e.target.value,
        })

    }
    onChange2 = e => {
        
        this.setState({
            file: e.target.files[0],
            filename: e.target.files[0].name
        })

    }

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
    render(){
       
    return (
        <Fragment>
            {this.state.message ? <Message msg={this.state.message} /> : null}
            <form onSubmit={this.onSubmit}>
                <div className="custom-file mb-4">
                    <input type="file" className="custom-file-input" value={this.state.image} name="image" id="customFile" onChange={this.onChange2} />
                    <label className="custom-file-label" htmlFor="customFile">{this.state.filename}</label>
                </div>
                <input type="submit" value="upload" className="btn btn-primary btn-block mt-4"/>
            </form>
            { this.state.uploadedFile ? <div className="row mt-5">
                <div className="col-md-5 m-auto">
                    <h3 className="text-center">{ this.state.uploadedFile.fileName }</h3>
                    <img style={{ width:"100%" }} src={this.state.uploadedFile.filePath} alt=""/>
                </div>
            </div> : null }
        </Fragment>
    )
    }
}

export default FileUpload