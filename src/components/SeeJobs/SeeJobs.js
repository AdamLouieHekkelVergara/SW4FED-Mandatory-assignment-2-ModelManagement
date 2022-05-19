import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import classes from "./SeeJobs.module.css";
import { getRequest } from "../../api/getRequest";

function SeeJobs() {
    const [jobsList, setJobsList] = useState([]);
    const getJobs_URL = "api/jobs"

    useEffect(() => {
        console.log("Go for get request!");
        getRequest({ apiEndPoint: getJobs_URL })
            .then(value =>{
                console.log("value:");
                console.log(value);
                setJobsList(value);});
    }, []);

    return (
        <div>
            <h3>Alle Jobs</h3>
            <ul>
                {jobsList.map(item => {
                    return <li key={item.jobId}>{item.jobId}</li>;
                })}
            </ul>
        </div>
    )
}
export default SeeJobs