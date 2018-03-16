import React from "react";
import "./Navbar.css";
import {Navbar, NavItem} from "react-materialize"

const NavBar = props => {
if (props.loggedIn) {
    return (
        <div className="navbar-fixed">
            
            <Navbar >
                <div className="logoName left">Metro Curbside Cleaning</div>
                <div className="right">
                    <NavItem href='/'>Home</NavItem>
                    <NavItem href='/ContactUs'>Contact Us</NavItem>
                    <NavItem href='/Profile'>Profile</NavItem>
                    <NavItem href='/LogIn' onClick={props.logoutmethod}>Log Out</NavItem>
                </div>
            </Navbar>
        </div>
		)
	} else {
		return (
            <div className="navbar-fixed">
                <Navbar brand='Metro Curbside' right>
                    <NavItem href='/'>Home</NavItem>
                    <NavItem href='/ContactUs'>Contact Us</NavItem>
                    <NavItem href='/SignUp'>Sign Up</NavItem>
                    <NavItem href='/LogIn'>Log In</NavItem>
                </Navbar>
            </div>

		)
	}
}            
export default NavBar;
