import React from "react";
import './WorkOut.css';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// toast.configure()


function WorkOut(props) {
    const { WorkOutDetails } = props;
    // console.log(WorkOutDetails)
    let totalTime = 0;
    for (const activities of WorkOutDetails) {
        totalTime = totalTime + activities.time;
    }

    const breakTime = (brtime) => {
        const a = document.getElementById('breakTimeValue');
        a.innerText = brtime;
    }

    // const notify = () => {
    //     toast('Complete')
    // }

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
                    <h2>60 <small>kg</small> </h2>
                    <p>Weight</p>
                </div>
                <div className="user-text">
                    <h2>5.7"<small>ft</small> </h2>
                    <p>Height</p>
                </div>
                <div className="user-text">
                    <h2>25 <small>yr</small> </h2>
                    <p>Age</p>
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

           
            <button className="background activity-completed" >Activity Completed</button>
            
        </div>
    );
}

export default WorkOut;