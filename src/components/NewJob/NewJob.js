import React from 'react'
import { useState } from "react";
import classes from './NewJob.module.css';
import { postRequest } from "../../api/postRequest";
import { Form, Button, Col, Row } from 'react-bootstrap';

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
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formCustomer">
                    <Form.Label>Customer</Form.Label>
                    <Form.Control
                    autoFocus
                    id="customer"
                    value={customer}
                    onChange={(e) => setCustomer(e.target.value)}      
                    placeholder="Peter Jakobsen" />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control
                    type="text"
                    id="location"
                    autoComplete="on"
                    placeholder="8660 Skanderborg"
                    onChange={(e) => setLocation(e.target.value)}
                    value={location}
                />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                        type="date"
                        id="startDate"
                        autoComplete="on"
                        onChange={(e) => setStartDate(e.target.value)}
                        value={startDate}
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="formDays">
                    <Form.Label>Days</Form.Label>
                    <Form.Control
                        type="number"
                        id="days"
                        autoComplete="on"
                        onChange={(e) => setDays(e.target.value)}
                        value={days} />
                </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formComments">
                <Form.Label>Comments</Form.Label>
                <Form.Control
                    type="text"
                    id="comments"
                    autoComplete="on"
                    onChange={(e) => setComments(e.target.value)}
                    value={comments}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>




        /*         <form className={classes.newJobForm} onSubmit={(e) => handleSubmit(e)}>
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
        
                </form> */
    )
}

export default NewJob