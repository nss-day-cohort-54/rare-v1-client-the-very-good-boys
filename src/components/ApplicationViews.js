import React from "react"
import { Route } from "react-router-dom"
import { CategoryList } from "./Categories/CategoriesList"
import { UserList } from "../Users/userList"

export const ApplicationViews = () => {
  return (
    <>
    <h1 >Welcome to Rare Publishing</h1>

    <Route exact path="/categories">
        <CategoryList />
    </Route>
    <Route exact path="/userManagement">
      <UserList />
    </Route>

    </>
    
  )
}
