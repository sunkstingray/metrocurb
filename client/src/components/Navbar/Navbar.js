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
                    <NavItem className="navLink" href='/'>Home</NavItem>
                    <NavItem className="navLink" href='/ContactUs'>Contact Us</NavItem>
                    <NavItem className="navLink" href='/Profile'>Profile</NavItem>
                    <NavItem className="navLink" href='/LogIn' onClick={props.logoutmethod}>Log Out</NavItem>
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
                        <NavItem className="navLink" href='/'>Home</NavItem>
                        <NavItem className="navLink" href='/ContactUs'>Contact Us</NavItem>
                        <NavItem className="navLink" href='/SignUp'>Sign Up</NavItem>
                        <NavItem className="navLink" href='/LogIn'>Log In</NavItem>
                    </div>
                </Navbar>
            </div>

		)
	}
}            
export default NavBar;
