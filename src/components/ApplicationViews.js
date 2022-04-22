import React from "react"
import { Route } from "react-router-dom"
import { TagsList } from "./tags/TagsList"
import { UserList } from "../Users/userList"
import { UserDetails } from "../Users/userDetails"

export const ApplicationViews = ( { tags, users } ) => {
  return (
    <>

      <Route exact path="/tags">
        <TagsList tags={tags} />
      </Route>

      <Route exact path="/userManagement">
        <UserList users={users} />
      </Route>

      <Route exact path="/userdetails">
        <UserDetails users={users} />
      </Route>
    </>
    
  )
}
