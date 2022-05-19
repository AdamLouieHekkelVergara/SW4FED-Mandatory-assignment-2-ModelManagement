import React from 'react'
import { Table } from 'react-bootstrap';
import { useState, useEffect } from "react";
import { getRequest } from "../../api/getRequest";


function ExpensesList() {
    const [expenseList, setExpenseList] = useState([]);
    const getExpenses_URL = "api/Expenses"

    useEffect(() => {
        getRequest({ apiEndPoint: getExpenses_URL })
            .then(value => {
                console.log("value:");
                console.log(value);
                setExpenseList(value);
            });
    }, []);



    return (
        <div>
            <h3></h3>
            <h3>Synlige Udgifter</h3>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Text</th>
                    </tr>
                </thead>
                <tbody>
                    {expenseList.map((item, index) => {
                        return <tr key={item.jobId}>
                            <td>{index + 1}</td>
                            <td>{item.date}</td>
                            <td>{item.amount}</td>
                            <td>{item.text}</td>
                        </tr>;
                    })}
                </tbody>
            </Table>
        </div>

    )
}

export default ExpensesList