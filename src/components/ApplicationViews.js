import React from "react"
import { Route } from "react-router-dom"
import { TagsList } from "./tags/TagsList"

export const ApplicationViews = ( { tags } ) => {
  return (
    <>
      <h1 >Welcome to Rare Publishing</h1>
      <Route exact path="/tags">
        <TagsList tags={tags} />
      </Route>
    </>
  )
}
