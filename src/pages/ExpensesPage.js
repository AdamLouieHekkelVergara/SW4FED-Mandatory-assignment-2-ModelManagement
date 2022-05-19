import React from 'react'
import AddExpense from '../components/Expenses/AddExpense'
import ExpensesList from '../components/Expenses/ExpensesList'
import { useLocation } from "react-router-dom";


function ExpensesPage() {
    var location = useLocation();   
  return (
     <section>     
        <AddExpense jobId = {location.state.jobId}/>
        <ExpensesList/>
    </section> 

  )
}

export default ExpensesPage