import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../image/logos/logo-brand.png";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar-main">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container-fluid">
                        <Link to="" className="navbar-brand">
                            <img className="header__logo" src={logo} alt="" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="" className="nav-link" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#home">About</a>
                            </li>
                            <li className="nav-item">
                                <Link to="/cart" className="nav-link" aria-current="page">Cart</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/admin" className="nav-link" aria-current="page">Admin</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
                </div>
                </div>
    );
};

export default Navbar;