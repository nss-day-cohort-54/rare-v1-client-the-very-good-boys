import React from "react"
import { Route } from "react-router-dom"
import { CategoryList } from "../Categories/CategoriesList"
import { TagsList } from "./tags/TagsList"
import { UserList } from "../Users/userList"

export const ApplicationViews = ( { tags, getAllTags } ) => {
  return (
    <>
      <Route exact path="/categories">
          <CategoryList />
      </Route>
      <Route exact path="/userManagement">
        <UserList />
      </Route>
      <Route exact path="/tags">
        <TagsList tags={tags} getAllTags={getAllTags} />
      </Route>
      <Route exact path="/userManagement">
        <UserList />
      </Route>
    </>
    
  )
}
