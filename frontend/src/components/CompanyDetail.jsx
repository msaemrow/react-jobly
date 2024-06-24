import React, { useState, useEffect  } from "react";
import { useParams} from "react-router";
import "../css/CompanyDetail.css"
import JoblyApi from "../api/api";
import Loading from "./Loading";


const CompanyDetail = () => {
    const { handle } = useParams();
    const [company, setCompany] = useState(null);
    const [pageLoading, setPageLoading] = useState(true);
    const [pageError, setPageError] = useState(false);

    
    useEffect(() =>{
        getSingleCompany();
    }, [])

    async function getSingleCompany(){
        try{
            let company = await JoblyApi.getCompany(handle);
            setCompany(company);
            setPageLoading(false);
        } catch(error){
            setPageError(true);
            setPageLoading(false);
        }

    }
    if(pageLoading) return <Loading />
    if(pageError) return <div><h1>Could not find that company</h1></div>

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