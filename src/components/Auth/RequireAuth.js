import React from 'react'

import useAuth from "./hooks/useAuth";
import {Outlet} from 'react-router-dom'

function RequireAuth() {
    const { auth } = useAuth();

  return (
    auth?.token ?  <Outlet/>
    : <Navigate to = "/auth" />

  )
}

export default RequireAuth
