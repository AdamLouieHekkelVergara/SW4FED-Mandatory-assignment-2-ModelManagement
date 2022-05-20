import React from 'react'
import {Redirect, Route} from 'react-router-dom'

function RequireAuth({children, ...rest}) {

  return (
    <Route {... rest} render={()=> {
      var token = localStorage.getItem("token")  
      return token ? children 
      : <Redirect to = '/Auth' />
    }}/>

  )
}

export default RequireAuth
