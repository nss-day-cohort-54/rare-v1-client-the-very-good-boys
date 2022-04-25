import React from "react"
import { Route } from "react-router-dom"
import { CategoryList } from "../Categories/CategoriesList"
import { TagsList } from "./tags/TagsList"
import { UserList } from "../Users/userList"
import { UserDetails } from "../Users/userDetails"

export const ApplicationViews = ({ tags, users }) => {
  import { PostList } from "./posts/PostList"
  import { PostForm } from "./posts/PostForm.js"
  import { PostDetails } from "./posts/PostDetail.js"
  export const ApplicationViews = ({ tags }) => {
    return (
     <>



        <Route exact path="/categories">
          <CategoryList />
        </Route>

        <Route exact path="/tags">
          <TagsList tags={tags} />
        </Route>

        <Route exact path="/userManagement">
          <UserList users={users} />
        </Route>

        <Route exact path="/users/:userId(\d+)">
          <UserDetails />
          <Route exact path="/components/posts">
            <PostList />
          </Route>
        </>
        )
}
