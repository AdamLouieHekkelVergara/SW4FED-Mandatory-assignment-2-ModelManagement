import React from "react";
import axios from "../../api/axios";
import { useRef, useState, useEffect, useContext } from "react";
import classes from "./SeeJobs.module.css";
import { getRequest } from "../../api/getRequest";

export default function SeeJobs() {
    const [jobs, getJobs] = useState('');
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