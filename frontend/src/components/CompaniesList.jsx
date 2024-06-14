import React, { useEffect, useState } from "react";
import Company from "./Company"
import JoblyApi from "../api/api"


const CompaniesList = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() =>{
        getAllCompanies();
    }, [])

    async function getAllCompanies(){
        let companies = await JoblyApi.getCompanies();
        setCompanies(companies);
        console.log(companies);
    }

    if(!companies) return <div><h1>No Companies Found!</h1></div>

    return (
        <div>
            <h1>Companies</h1>
            {companies.map((company) => (
                <Company 
                    name={company.name}
                    employees={company.numEmployees}
                    description={company.description}
                />
            ))}


        </div>
    )
}

export default CompaniesList;
