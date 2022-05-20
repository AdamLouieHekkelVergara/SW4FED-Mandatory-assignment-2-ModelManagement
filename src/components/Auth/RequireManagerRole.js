import React from 'react'
import {Redirect, Route} from 'react-router-dom'

function RequireManagerRole({children, ...rest}) {

  return (
    <Route {... rest} render={()=> {
        var role = localStorage.getItem("role")
      return role === 'Manager' ? children 
      : <Redirect to = '/' />
    }}/>

  )
}

export default RequireManagerRole