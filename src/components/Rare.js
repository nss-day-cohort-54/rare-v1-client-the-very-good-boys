import React, { useState, useEffect } from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { getTags } from "./tags/TagsManger"

export const Rare = () => {
  const [token, setTokenState] = useState(localStorage.getItem('token'))
  const [tags, setTags] = useState([])

  useEffect(
    () => {
      getAllTags()
    },[]
  )

  const getAllTags = () => {
    getTags().then((data) => setTags(data))
  }

  const setToken = (newToken) => {
    localStorage.setItem('token', newToken)
    setTokenState(newToken)
  }

  
  return <>
    {
      token
        ?
        <Route>
          <NavBar token={token} setToken={setToken} />
          <ApplicationViews tags={tags} getAllTags={getAllTags} />
        </Route>
        :
        <Redirect to="/login" />
    }

    <Route exact path="/login" >
      <NavBar token={token} setToken={setToken} />
      <Login token={token} setToken={setToken} />
    </Route>

    <Route path="/register" exact>
      <NavBar token={token} setToken={setToken} />
      <Register token={token} setToken={setToken} />
    </Route>

    

  </>
}
