import React from "react";
import { useEffect, useState } from 'react';
import Activities from "../Activities/Activities";
import './MainPage.css';


function MainPage() {


    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])
    
    const [WorkOut, setWorkOut] = useState([]);

    const buttonFunction = (activiti) => {
        console.log(activiti);
        const updateWorkOut = [...WorkOut, activiti];
        setWorkOut(updateWorkOut);
    }

    return (
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
                <h1>hello im WorkOut {WorkOut.length}</h1>
            </div>

        </div>

    );
}

export default MainPage;