import React from "react";
import { Link } from "react-router-dom";

const Navbar = props =>
    <nav className=" navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="/">Metro Curbside Cleaning</a>
            <div className="collapse navbar-collapse text-right" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/HowItWorks">How It Works</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Pricing">Pricing</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/ContactUs">Contact Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Faq">FAQ</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>;

export default Navbar;
