import React, { useState, useEffect } from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { getTags } from "./tags/TagsManger"
import { getUsers } from "../Users/userManager"
import { getPosts } from "./posts/PostManager"

export const Rare = () => {
  const [token, setTokenState] = useState(localStorage.getItem('token'))
  const [tags, setTags] = useState([])
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])

  useEffect(
    () => {
      getTags().then(data => setTags(data))
    },[]
  )

  useEffect(
    () => {
      getAllTags()
      getUsers().then(data => setUsers(data))
      getPosts().then(data => setPosts(data))
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
<<<<<<< HEAD
          <ApplicationViews tags={tags} getAllTags={getAllTags} />
          <ApplicationViews tags={tags} users={users} posts={posts}/>
          
=======
          <ApplicationViews tags={tags} getAllTags={getAllTags} users={users} />
>>>>>>> main
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
