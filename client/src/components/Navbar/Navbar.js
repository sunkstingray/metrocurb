import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = props =>

    <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
            <a className="navbar-brand" href="/">Metro Curbside Cleaning</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className={window.location.pathname === "/" ? "nav-item active" : "nav-item"}>
                        <a className="nav-link" href="/">Home</a>

                    </li>
                    <li className={window.location.pathname === "/HowItWorks" ? "nav-item active" : "nav-item"}>
                        <a className="nav-link" href="/HowItWorks">How It Works</a>
                    </li>
                    <li className={window.location.pathname === "/Pricing" ? "nav-item active" : "nav-item"}>
                        <a className="nav-link" href="/Pricing">Pricing</a>
                    </li>
                    <li className={window.location.pathname === "/ContactUs" ? "nav-item active" : "nav-item"}>
                        <a className="nav-link" href="/ContactUs">Contact Us</a>
                    </li>
                    <li className={window.location.pathname === "/Faq" ? "nav-item active" : "nav-item"}>
                        <a className="nav-link" href="/Faq">FAQ</a>
                    </li>
                    <li className={window.location.pathname === "/SignUp" ? "nav-item active" : "nav-item"}>
                        <a className="nav-link" href="/SignUp">Sign Up</a>
                    </li>
                    <li className={window.location.pathname === "/Profile" ? "nav-item active" : "nav-item"}>
                        <a className="nav-link" href="/Profile">Profile</a>
                    </li>
                    <li className={window.location.pathname === "/LogIn" ? "nav-item active" : "nav-item"}>
                        <a className="nav-link" href="/LogIn">Log-In</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>;

export default Navbar;
