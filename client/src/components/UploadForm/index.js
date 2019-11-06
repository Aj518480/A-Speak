import React from "react";
import "./style.css";


class UploadForm extends React.Component {
    // form: null;
    // username: null;
    // password: null;

    render() {
        return (

            <form className="text-center border border-light p-5" action="#!">
                <p className="h4 mb-4">Create Your Board</p>

                <div className="form-row mb-4">
                    <div className="col" />
                    {/* <!-- First name --> */}
                    <input type="text" id="defaultRegisterFormFirstName" className="form-control" placeholder="Board Name" />
                </div>
                <div>
                    <div className="col" >
                        {/* <!-- Last name --> */}
                        <input type="text" id="defaultRegisterFormLastName" className="form-control" placeholder="Child's Name" />
                    </div>
                </div>

                {/* image input */}
                <div className="form-row mb-4">
                    <div className="col" >
                    <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
                    </div>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="inputGroupFile01"
                            aria-describedby="inputGroupFileAddon01" />
                            <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                    </div>
                    </div>
                    </div>
                </div>

                {/* search button */}
                <button className="btn btn-primary btn-block my-4" type="submit">Create</button>


            </form>


                )
            }
        }
            
export default UploadForm;