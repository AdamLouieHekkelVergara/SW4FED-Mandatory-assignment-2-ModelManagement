import React from 'react'
import { useState } from "react";
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
        }).then(status => {
            console.log("status for post request: "+ status);
            if(status === 201){ // status code for success = 201
                alert("successfully created Job!")
                setCustomer('');
                setDays(0);
                setLocation('');
                setStartDate('')
                setComments('');

            }
            else {alert('Something bad happened! Status code:' + status)}
        
        });
        
    }

    const [customer, setCustomer] = useState("");
    const [startDate, setStartDate] = useState("");
    const [days, setDays] = useState(0);
    const [location, setLocation] = useState("");
    const [comments, setComments] = useState("");

    return (
    <section>
        <div className="container">
            <h2 style={{color: "black"}}>Tilføj et nyt job</h2>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formCustomer">
                        <Form.Label>Customer</Form.Label>
                        <Form.Control
                            autoFocus
                            value={customer}
                            onChange={(e) => setCustomer(e.target.value)}
                            placeholder="Peter Jakobsen" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formLocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                        type="text"
                        autoComplete="on"
                        placeholder="8660 Skanderborg"
                        onChange={(e) => setLocation(e.target.value)}
                        value={location} />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formDate">
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                            type="date"
                            autoComplete="on"
                            onChange={(e) => setStartDate(e.target.value)}
                            value={startDate} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formDays">
                        <Form.Label>Days</Form.Label>
                        <Form.Control
                            type="number"
                            autoComplete="on"
                            onChange={(e) => setDays(e.target.value)}
                            value={days} />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formComments">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control
                        type="text"
                        autoComplete="on"
                        onChange={(e) => setComments(e.target.value)}
                        value={comments} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    </section>
    )
}

export default NewJob