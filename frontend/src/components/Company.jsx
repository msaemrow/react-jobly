import React from "react";
import "../css/Company.css"


const Company = ({ name, employees, description }) => {
    return (
        <div  className='Company'>
            <h2> {name} </h2>
            <p>{description}</p>
            <p>Employees: {employees}</p>
        </div>
    )
}

export default Company;