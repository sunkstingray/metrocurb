import React from "react";
// import "./Card.css";

const Button = props => 
    <button type="button" className="btn btn-secondary" onClick={props.onClick} value={props.value} {...props} />

export default Button;