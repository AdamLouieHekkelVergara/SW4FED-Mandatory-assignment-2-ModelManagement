import React from 'react'
import { useState } from "react";
import classes from './Expenses.css';
import { postRequest } from "../../api/postRequest";

function AddExpense({ modelId, jobId }) {
  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);



  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Handle submit!");
    let object = {
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

  }

  return (
    <form className={classes.newJobForm} onSubmit={(e) => handleSubmit(e)}>
    <h2>Tilføj en udgift til jobbet</h2>
    <div className={classes.control}>
        <label htmlFor="Date">Date</label>
        <input
            type="date"
            id="date"
            autoComplete="on"
            onChange={(e) => setDate(e.target.value)}
            value={date}
        />
    </div>

    <div className={classes.control}>
        <label htmlFor="amount">Amount</label>
        <input
            type="Number"
            id="amount"
            autoComplete="on"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}

        />
    </div>
    <div className={classes.control}>
        <label htmlFor="text">text</label>
        <textarea
            type="text"
            id="text"
            autoComplete="on"
            onChange={(e) => setText(e.target.value)}
            value={text}

        />
    </div>
    <div className={classes.actions}>
        <button
            type='submit'
        >Tilføj</button>
    </div>

</form>
  )
}

export default AddExpense
