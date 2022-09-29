import React from "react";
import './WorkOut.css';


function WorkOut(props) {
    return (
        <div className="WorkOut-container">
            <h1>hello im WorkOut {props.WorkOutDetails.length}</h1>
        </div>
    );
}

export default WorkOut;