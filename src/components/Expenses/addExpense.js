import React from 'react'
import { useState } from "react";
import { postRequest } from "../../api/postRequest";
import { Form, Button } from 'react-bootstrap';
import jwt_decode from 'jwt-decode';

function AddExpense({ modelId, jobId }) {
  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Handle submit!");
    var token = localStorage.getItem("token");

/*     let object = {
      "modelId": modelId,
      "jobId": jobId,
      "date": date,
      "text": text,
      "amount": amount
    }
    postRequest({
      apiEndPoint: "api/Expenses",
      object: object
    });
    window.location.reload(true); */
  }

  return (
    <section>
      <div className="container">
        <h2 style={{ color: "black" }}>Tilføj en ny udgift til dette job.</h2>

        <Form onSubmit={(e) => handleSubmit(e)}>

          <Form.Group className="mb-3" controlId="formAmount">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              autoFocus
              type="Number"
              autoComplete="on"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
            />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              autoComplete="on"
              onChange={(e) => setDate(e.target.value)}
              value={date} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formText">
            <Form.Label>Text</Form.Label>
            <Form.Control
              type="text"
              autoComplete="on"
              onChange={(e) => setText(e.target.value)}
              value={text} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </section>

  )
}

export default AddExpense
