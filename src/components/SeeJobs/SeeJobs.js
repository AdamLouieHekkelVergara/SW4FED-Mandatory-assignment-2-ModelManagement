import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import classes from "./SeeJobs.module.css";
import { getRequest } from "../../api/getRequest";

function SeeJobs() {
    const [jobs, setJobs] = useState('');
    const getJobs_URL = "api/jobs"

    useEffect(() => {
        getRequest();
    }, []);

return(
    <main>
        <ui>
            {jobs.map((job) => (
                <li className="">

                </li>
            ))}
        </ui>
    </main>
)
}
export default SeeJobs