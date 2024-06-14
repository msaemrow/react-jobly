import React from "react";
import "../css/Company.css"


const Company = ({ name, employees, description }) => {
    return (
        <div  className='Company'>
            <h2 className="Company-name"> {name} </h2>
            <p className="Company-description">{description}</p>
            <p className="Company-employees">Employees: {employees}</p>
        </div>
    )
}

export default Company;