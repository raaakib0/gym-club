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
    }
        , [])

    return (
        <div className="container">

            <div className="main-page-card-container">
                {
                    activities.map(activiti => <Activities
                        key={activiti.id}
                        activiti={activiti}
                    ></Activities>)
                }
            </div>

            <div className="WorkOut-container">
                <h1>hello im WorkOut {activities.length}</h1>
            </div>

        </div>

    );
}

export default MainPage;