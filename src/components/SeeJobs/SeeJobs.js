import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import classes from "./SeeJobs.module.css";
import { FaMinusCircle } from 'react-icons/fa';

import { getRequest } from "../../api/getRequest";

function SeeJobs() {
    const [jobsList, setJobsList] = useState([]);
    const getJobs_URL = "api/jobs"

    useEffect(() => {
        console.log("Go for get request!");
        getRequest({ apiEndPoint: getJobs_URL })
            .then(value => {
                console.log("value:");
                console.log(value);
                setJobsList(value);
            });
    }, []);

    return (
        <div>
            <h3>Alle Jobs</h3>
            <ul className={classes.unorderedlist}>
                <lh className={classes.lh}>Fruits I Like:</lh>
                <lh className={classes.lh}>Apples</lh>
                <lh className={classes.lh}>Bananas</lh>
                <lh className={classes.lh}>Oranges</lh>
                {jobsList.map(item => {
                    return <li key={item.jobId} className={classes.listitem}>
                        <label>{item.customer}</label>
                        <label>{item.startDate}</label>
                        <label>{item.days}</label>
                        <label>{item.location}</label>
                        <FaMinusCircle role="button"></FaMinusCircle>
                    </li>;
                })}
            </ul>
        </div>
    )
}
export default SeeJobs