import React from "react";
import { useEffect, useState } from 'react';
import Activities from "../Activities/Activities";
import Header from "../Header/Header";
import WorkOut from "../WorkOut/WorkOut";
import './MainPage.css';


function MainPage() {


    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    const [WorkOutDetails, setWorkOutDetails] = useState([]);

    const buttonFunction = (activiti) => {
        // console.log(activiti);
        const updateWorkOutDetails = [...WorkOutDetails, activiti];
        setWorkOutDetails(updateWorkOutDetails);
    }

    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <h1>Select today’s exercise</h1>
            <div className="container">

                <div className="main-page-card-container">
                    {
                        activities.map(activiti => <Activities
                            key={activiti.id}
                            activiti={activiti}
                            buttonFunction={buttonFunction}
                        ></Activities>)
                    }
                </div>

                <div className="WorkOut-container">
                    <WorkOut
                        WorkOutDetails={WorkOutDetails}
                    ></WorkOut>
                </div>

            </div>
        </div>
    );
}

export default MainPage;