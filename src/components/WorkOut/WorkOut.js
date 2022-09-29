import React from "react";
import './WorkOut.css';


function WorkOut(props) {
    const { WorkOutDetails } = props;
    // console.log(WorkOutDetails)
    let totalTime = 0;
    for (const activities of WorkOutDetails) {
        totalTime = totalTime + activities.time;
    }

    const breakTime = (brtime) => {
        const a = document.getElementById('breakTimeValue');
        a.innerText =  brtime ;
    }

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

            <div className="user-info background">
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
            <div className="user-info background">
                <button onClick={() => breakTime('10 seconds')}>10 s</button>
                <button onClick={() => breakTime('20 seconds')}>20 s</button>
                <button onClick={() => breakTime('30 seconds')}>30 s</button>
                <button onClick={() => breakTime('40 seconds')}>40 s</button>
                <button onClick={() => breakTime('50 seconds')}>50 s</button>

            </div>

            {/* Exercise details */}

            <h3>Exercise Details</h3>

            <div className="exercise-details background">
                <p>Exercise time</p>
                <p>{totalTime} seconds</p>
            </div>
            <div className="exercise-details background">
                <p>Break time</p>
                <p id="breakTimeValue">0 second</p>
            </div>

            <h1>hello im WorkOut {props.WorkOutDetails.length}</h1>
        </div>
    );
}

export default WorkOut;