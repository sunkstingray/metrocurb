import React from "react";
import "./Footer.css";
import facebookLogo from "../../images/facebook_logo.png";
import mailLogo from "../../images/mail.png";

const Footer = props => 
    <footer className="footer-fixed">
        <div className="container">
            <div className="row valign-wrapper">
                <div className="col s6">
                    <h5>&copy;2018 Metro Curbside Cleaning</h5>

                </div>
                <div className="fb-like  valign-wrapper" data-href="http://metrocurb.com" data-layout="button_count" data-action="recommend" data-size="large" data-show-faces="true" data-share="true"></div>
                </div>
        </div>
    </footer>;

export default Footer;