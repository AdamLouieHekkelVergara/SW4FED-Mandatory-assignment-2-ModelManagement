import React from 'react'
import AddExpense from '../components/Expenses/AddExpense'
import { useLocation } from "react-router-dom";
import AddModelToJob from '../components/NewModel/AddModelToJob';


function JobAddPropertiesPage() {
    var location = useLocation();   
  return (
     <div>     
        <AddExpense jobId = {location.state.jobId}/>

        <AddModelToJob jobId = {location.state.jobId}/>
    </div> 

  )
}


export default JobAddPropertiesPage
