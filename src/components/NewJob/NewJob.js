import React from 'react'
import { useState } from "react";
import classes from './NewJob.module.css';
import { postRequest } from "../../api/postRequest";

function NewJob() {

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Handle submit!");
        let object = {
            "customer": customer,
            "startDate": startDate,
            "days": days,
            "location": location,
            "comments": comments
        }
        postRequest({
            apiEndPoint: "api/Jobs",
            object: object
        });

    }

    const [customer, setCustomer] = useState("");
    const [startDate, setStartDate] = useState("");
    const [days, setDays] = useState(0);
    const [location, setLocation] = useState("");
    const [comments, setComments] = useState("");

    return (
        <form className={classes.newJobForm} onSubmit={(e) => handleSubmit(e)}>
            <h2>Tilføj et nyt job</h2>
            <div className={classes.control}>
                <label htmlFor='customer'>Customer</label>
                <input
                    autoFocus
                    id="customer"
                    value={customer}
                    onChange={(e) => setCustomer(e.target.value)}
                ></input>
            </div>
            <div className={classes.control}>
                <label htmlFor="startDate">Start Date</label>
                <input
                    type="date"
                    id="startDate"
                    autoComplete="on"
                    onChange={(e) => setStartDate(e.target.value)}
                    value={startDate}
                />
            </div>

            <div className={classes.control}>
                <label htmlFor="days">Days</label>
                <input
                    type="number"
                    id="days"
                    autoComplete="on"
                    onChange={(e) => setDays(e.target.value)}
                    value={days}

                />
            </div>
            <div className={classes.control}>
                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    id="location"
                    autoComplete="on"
                    onChange={(e) => setLocation(e.target.value)}
                    value={location}

                />
            </div>
            <div className={classes.control}>
                <label htmlFor="comments">Comments</label>
                <textarea
                    type="text"
                    id="comments"
                    autoComplete="on"
                    onChange={(e) => setComments(e.target.value)}
                    value={comments}

                />
            </div>
            <div className={classes.actions}>
                <button
                    type='submit'
                >Create new job</button>
            </div>

        </form>
    )
}

export default NewJob