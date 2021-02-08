import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../image/logos/logo-brand.png";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar-main">
            <div className="container">
                <nav class="navbar navbar-expand-lg navbar-light ">
                    <div class="container-fluid">
                        <Link to="" class="navbar-brand">
                            <img className="header__logo" src={logo} alt="" />
                        </Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="" class="nav-link" aria-current="page">Home</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#home">About</a>
                            </li>
                            <li class="nav-item">
                                <Link to="/cart" class="nav-link" aria-current="page">Cart</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/login">Login</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/admin" class="nav-link" aria-current="page">Admin</Link>
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