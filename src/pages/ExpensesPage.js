import React from 'react'
import AddExpense from '../components/Expenses/AddExpense'
import ExpensesList from '../components/Expenses/ExpensesList'
import { useLocation } from "react-router-dom";
import AddModelToJob from '../components/NewModel/AddModelToJob';
import JobModelList from '../components/SeeJobs/JobModelList';


function ExpensesPage() {
    var location = useLocation();   
  return (
     <section>     
        <AddExpense jobId = {location.state.jobId}/>
        <ExpensesList/>
        <AddModelToJob jobId = {location.state.jobId}/>
        <JobModelList jobId = {location.state.jobId}/>
    </section> 

  )
}

export default ExpensesPage