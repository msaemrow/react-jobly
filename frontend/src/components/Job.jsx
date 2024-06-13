import React from "react";
import "../css/Job.css"


const Job = ({ title }) => {
    return (
        <div  className='Job'>
            <h2> {title} </h2>
            <p>Company goes here</p>
            <p>Salary goes here</p>
            <p>Equity goes here</p>
        </div>
    )
}

export default Job;