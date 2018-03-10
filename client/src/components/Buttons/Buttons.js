import React from "react";
import "./Buttons.css";

const Buttons = props => 
    <button type="button" className="btn blue-grey lighten-2" onClick={props.onClick} value={props.value} {...props} />

export default Buttons;