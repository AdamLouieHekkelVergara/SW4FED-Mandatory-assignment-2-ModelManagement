import React from 'react'
import ExpensesList from '../components/Expenses/ExpensesList'
import { useLocation } from "react-router-dom";
import JobModelList from '../components/SeeJobs/JobModelList';


function JobDetailsPage() {
    var location = useLocation();   
  return (
     <section>     
        <ExpensesList/>
        <JobModelList jobId = {location.state.jobId}/>
    </section> 

  )
}

export default JobDetailsPage
