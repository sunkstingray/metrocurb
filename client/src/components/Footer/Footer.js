import React from "react";
import "./Footer.css";
import facebookLogo from "../../images/facebook_logo.png";
import mailLogo from "../../images/mail.png";

const Footer = props => 
    <footer className="footer-fixed">
        <div className="container">
            <div className="row valign-wrapper">
                <div className="col s12 m6">
                    &copy;2018 Metro Curbside Cleaning
                </div>
                <div className="col s12 m6">
                    <div className="fb-like" data-href="http://metrocurb.com" data-layout="button_count" data-action="recommend" data-size="large" data-show-faces="true" data-share="true"></div>
                </div>
            </div>
        </div>
    </footer>;

export default Footer;