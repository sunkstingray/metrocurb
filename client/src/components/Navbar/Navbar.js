import React from "react";
import "./Navbar.css";
import {Navbar, NavItem} from "react-materialize"

const NavBar = props => {
if (props.loggedIn) {
    return (
        <div className="navbar">
            
            <Navbar >
                <div className="logoName left">Metro Curbside Cleaning</div>
                <div className="right links">
                {/* className={window.location.pathname === "/" ? "nav-item active" : "nav-item" */}
                    <NavItem className={window.location.pathname === "/" ? "nav-item active" : "nav-item"} href='/'>Home</NavItem>
                    <NavItem className={window.location.pathname === "/ContactUs" ? "nav-item active" : "nav-item"} href='/ContactUs'>Contact Us</NavItem>
                    <NavItem className={window.location.pathname === "/Profile" ? "nav-item active" : "nav-item"} href='/Profile'>Profile</NavItem>
                    <NavItem className={window.location.pathname === "/LogIn" ? "nav-item active" : "nav-item"} href='/LogIn' onClick={props.logoutmethod}>Log Out</NavItem>
                </div>
            </Navbar>
        </div>
		)
	} else {
		return (
            <div className="navbar">
                <Navbar >
                    <div className="logoName left">Metro Curbside Cleaning</div>
                    <div className="right">
                        <NavItem className={window.location.pathname === "/" ? "nav-item active" : "nav-item"} href='/'>Home</NavItem>
                        <NavItem className={window.location.pathname === "/ContactUs" ? "nav-item active" : "nav-item"} href='/ContactUs'>Contact Us</NavItem>
                        <NavItem className={window.location.pathname === "/SignUp" ? "nav-item active" : "nav-item"} href='/SignUp'>Sign Up</NavItem>
                        <NavItem className={window.location.pathname === "/LogIn" ? "nav-item active" : "nav-item"} href='/LogIn'>Log In</NavItem>
                    </div>
                </Navbar>
            </div>

		)
	}
}            
export default NavBar;
