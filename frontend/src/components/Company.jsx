import React from "react";
import "../css/Company.css"


const Company = ({ name }) => {
    return (
        <div  className='Company'>
            <h2> {name} </h2>
            <p>Num employees goes here</p>
            <p>Description goes here</p>
            <p>Logo goes here</p>
        </div>
    )
}

export default Company;