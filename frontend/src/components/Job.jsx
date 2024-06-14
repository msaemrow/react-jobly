import { Link } from "react-router-dom";
import "../css/Job.css"


const Job = ({ id, title, salary, equity, company }) => {
    return (
        <div  className='Job'>
            <h4 className="Job-title">
                 <Link to={`/jobs/${id}`}>{title}</Link>
            </h4>
            <p className="Job-company"> {company} </p>
            <p className="Job-salary"> Salary: {salary} </p>
            <p className="Job-equity"> Equity: {equity} </p>
        </div>
    )
}

export default Job;