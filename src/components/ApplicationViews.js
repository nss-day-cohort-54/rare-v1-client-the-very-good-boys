import React from "react"
import { Route } from "react-router-dom"
import { CategoryList } from "./Categories/CategoriesList"

export const ApplicationViews = () => {
  return (
    <>
    <h1 >Welcome to Rare Publishing</h1>

    <Route exact path="/categories">
        <CategoryList />
    </Route>
    </>
  )
}
