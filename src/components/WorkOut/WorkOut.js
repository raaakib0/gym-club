import React from "react";
import './WorkOut.css';


function WorkOut(props) {
    const { WorkOutDetails } = props;
    console.log(WorkOutDetails)

    return (
        <div className="WorkOut-container">
            {/* user information */}
            <div className="user-info">
                <img src="My Photo.jpg" alt="" />
                <div className="user-text">
                    <h2>Md. Rakibul Islam</h2>
                    <p>Dhaka, Bangladesh</p>
                </div>
            </div>

            <div className="user-info">
                <div className="user-text">
                    <h2>75 <small>kg</small> </h2>
                    <p>weight</p>
                </div>
                <div className="user-text">
                    <h2>75 <small>kg</small> </h2>
                    <p>weight</p>
                </div>
                <div className="user-text">
                    <h2>75 <small>kg</small> </h2>
                    <p>weight</p>
                </div>
            </div>

            {/* braeak time */}

            <h2>Add A Break</h2>
            <div className="user-info">
                <p>10s</p>
                <p>10s</p>
                <p>10s</p>
                <p>10s</p>
                <p>10s</p>
            </div>

            {/* Exercise details */}
            
            <h3>Exercise Details</h3>

            <div className="exercise-details">
                <p>Exercise time</p>
                <p>{WorkOutDetails.time} seconds</p>
            </div>
            <div className="exercise-details">
                <p>Break time</p>
                <p>10s</p>
            </div>

            <h1>hello im WorkOut {props.WorkOutDetails.length}</h1>
        </div>
    );
}

export default WorkOut;