import React from "react";
import { useEffect, useState } from 'react';
import './Card.css';


function Card() {


    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }
        , [])

    return (
        <div className="container">

            <div className="card-container">
                <h1>hello {activities.length}</h1>
            </div>

            <div className="WorkOut-container">
                <h1>hello im WorkOut {activities.length}</h1>
            </div>

        </div>

    );
}

export default Card;