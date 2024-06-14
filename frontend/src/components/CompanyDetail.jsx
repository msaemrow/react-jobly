import React, { useState, useEffect  } from "react";
import { useParams} from "react-router";
import "../css/CompanyDetail.css"
import JoblyApi from "../api/api";


const CompanyDetail = () => {
    const { handle } = useParams();
    const [company, setCompany] = useState(null);

    
    useEffect(() =>{
        getSingleCompany();
    }, [])

    async function getSingleCompany(){
        let company = await JoblyApi.getCompany(handle);
        setCompany(company);
    }

    if(!company) return <div><h1>No Companies Found!</h1></div>

    return (
        <div  className='CompanyDetail'>
            <h2 className="CompanyDetail-name"> {company.name} </h2>
            <p className="CompanyDetail-description">{company.description}</p>
            <p className="CompanyDetail-employees">Employees: {company.numEmployees}</p>
            <p>Jobs: {company.jobs.length}</p>
        </div>
    )
}

export default CompanyDetail;