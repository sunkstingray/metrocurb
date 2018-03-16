import React from "react";
import "./Footer.css";
import facebookLogo from "../../images/facebook_logo.png";
import mailLogo from "../../images/mail.png";

const Footer = props => 
    <footer className="footer-fixed">
        <div className="container">
            <div className="row">
                <div className="col s6">
                    <h5 className="logoName">&copy; Metro Curbside Cleaning</h5>
                </div>
                <div className="col s6">
                    <a href="https://www.facebook.com/Metro-Curbside-Cleaning-LLC-452583424794712/" target="_blank"><img src={facebookLogo} className="logo" /></a>
                    <a href="/ContactUs"><img src={mailLogo} className="logo" /></a>
                </div>
                
            </div>
        </div>
    </footer>;

export default Footer;