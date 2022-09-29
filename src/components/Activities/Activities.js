import React from "react";
import './Activities.css';


function Activities(props) {
    const { name, img, seller, price } = props.activiti;
    return (
        <div className="Activities-container">
            <div>
                <img src={img} alt="" />
                <p>{name}</p>
                <p>Time Requirement : {price}</p>
            </div>
            <button onClick={() => props.buttonFunction(props.activiti)} className="add-button">Add to list</button>
        </div>
    );
}

export default Activities;