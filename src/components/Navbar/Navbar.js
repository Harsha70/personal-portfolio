import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div style={{height: "4rem"}}>
            <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Harsha Vardhan Reddy</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-lg-0">
                            <li className="nav-item" style={{marginRight: '3rem'}}>
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item" style={{marginRight: '3rem'}}>
                                <Link className="nav-link" to="/projects">Projects</Link>
                            </li>
                            <li className="nav-item" style={{marginRight: '3rem'}}>
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar