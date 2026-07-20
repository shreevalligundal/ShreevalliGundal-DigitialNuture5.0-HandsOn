import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore() {

    const Name = "John";
    const School = "ABC Public School";
    const Total = 450;
    const Goal = 500;

    const Average = (Total / Goal) * 100;

    return (
        <div className="box">
            <h2>Student Score Card</h2>

            <p><b>Name :</b> {Name}</p>
            <p><b>School :</b> {School}</p>
            <p><b>Total Marks :</b> {Total}</p>
            <p><b>Goal :</b> {Goal}</p>

            <h3>Average Score : {Average}%</h3>
        </div>
    );
}

export default CalculateScore;