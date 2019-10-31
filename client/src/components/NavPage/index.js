import React from "react";
import "./style.css";


function Navbar() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

                <a className="navbar-brand" href="google.com">A-Speak</a>

                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                    aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}

                {/* <div className="collapse navbar-collapse" id="basicExampleNav">

                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="google.com">Home
                            <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="google.com">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="google.com">Pricing</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false" href="google.com">Dropdown</a>
                            <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="google.com">Action</a>
                                <a className="dropdown-item" href="google.com">Another action</a>
                                <a className="dropdown-item" href="google.com">Something else here</a>
                            </div>
                        </li>

                    </ul> */}

                    {/* <form className="form-inline">
                        <div className="md-form my-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                        </div>
                    </form> */}
                {/* </div> */}

            </nav>
        </div>
    )
}

export default Navbar;