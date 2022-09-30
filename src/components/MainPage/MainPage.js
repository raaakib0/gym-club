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
            <h3>Select today’s exercise</h3>
            <div className="container">

                <div className="main-page-card-container">
                    {
                        activities.map(activiti => <Activities
                            key={activiti.id}
                            activiti={activiti}
                            buttonFunction={buttonFunction}
                        ></Activities>)
                    }
                    <div className="question">
                        <h1>How does it React Work?</h1>
                        <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering our code.</p>
                    </div>
                    <div className="question">
                        <h1>Difference between props and state react.</h1>
                        <p>The key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component.</p>
                    </div>
                    <div className="question">
                        <h1>How does it works useEffect except data load?</h1>
                        <p>By using this Hook, you tell React that your component needs to do something after render</p>
                    </div>
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