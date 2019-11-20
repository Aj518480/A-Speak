import React, { Component } from "react";
import {
	Link
} from 'react-router-dom';
import "./style.css";

class LogOutBtn extends Component {


    render() {
        return(
            <div>
               <Link to="/"><form align="right" name="form1" method="post" action="log_out.php">
                    <label className="logoutLblPos">
                <input name="submit2" type="submit" id="submit2" value="log out">
                    </input>
                    </label>
                </form>
                </Link> 
            </div>  
        )
    }
}


export default LogOutBtn;