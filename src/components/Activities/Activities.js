import React from "react";
import './Activities.css';


function Activities(props) {
    const { name, img, seller, price } = props.activiti;
    return (
        <div className="Activities-container">
            <img src={img} alt="" />
            <p>{name }</p>
        </div>
    );
}

export default Activities;