import React from "react"
import { Route } from "react-router-dom"
import { CategoryList } from "../Categories/CategoriesList"
import { TagsList } from "./tags/TagsList"
import { UserList } from "../Users/userList"
import { PostList } from "./posts/PostList"
import { PostForm } from "./posts/PostForm.js"
import { PostDetails } from "./posts/PostDetail.js"
export const ApplicationViews = ( { tags } ) => {
  return (
    <>
    <h1 >Welcome to Rare Publishing</h1>

    <Route exact path="/categories">
        <CategoryList />
    </Route>
    <Route exact path="/userManagement">
      <UserList />
    </Route>
      <h1 >Welcome to Rare Publishing</h1>
      <Route exact path="/tags">
        <TagsList tags={tags} />
      </Route>
      <Route exact path="/components/posts">
        <PostList />
      </Route>
    </>
  )
}
