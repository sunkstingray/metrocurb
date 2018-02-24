import React from "react";
import { Link } from "react-router-dom";

const Navbar = props =>
    <nav className=" navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand" href="/">Metro Curbside Cleaning</a>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className={window.location.pathname === "/" ? "nav-item active" : "nav-item"}>
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className={window.location.pathname === "/HowItWorks" ? "nav-item active" : "nav-item"}>
                        <Link className="nav-link" to="/HowItWorks">How It Works</Link>
                    </li>
                    <li className={window.location.pathname === "/Pricing" ? "nav-item active" : "nav-item"}>
                        <Link className="nav-link" to="/Pricing">Pricing</Link>
                    </li>
                    <li className={window.location.pathname === "/ContactUs" ? "nav-item active" : "nav-item"}>
                        <Link className="nav-link" to="/ContactUs">Contact Us</Link>
                    </li>
                    <li className={window.location.pathname === "/Faq" ? "nav-item active" : "nav-item"}>
                        <Link className="nav-link" to="/Faq">FAQ</Link>
                    </li>
                    <li className={window.location.pathname === "/LogIn" ? "nav-item active" : "nav-item"}>
                        <Link className="nav-link" to="/LogIn">Log-In</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>;

export default Navbar;
