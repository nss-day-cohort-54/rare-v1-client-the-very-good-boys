import React from "react"
import { Route } from "react-router-dom"
import { CategoryList } from "../Categories/CategoriesList"
import { TagsList } from "./tags/TagsList"
import { UserList } from "../Users/userList"
import { UserDetails } from "../Users/userDetails"
import { PostList } from "./posts/PostList"
import { PostForm } from "./posts/PostForm.js"
import { PostDetails } from "./posts/PostDetail.js"
import { getPosts } from "./posts/PostManager"

export const ApplicationViews = ({ tags, getAllTags, users, posts, getPosts }) => {
  return (
    <>
      <Route exact path="/categories">
<<<<<<< HEAD
        <CategoryList />
      </Route>

=======
          <CategoryList />
      </Route>
>>>>>>> main
      <Route exact path="/tags">
        <TagsList tags={tags} />
      </Route>

      <Route exact path="/userManagement">
        <UserList users={users} />
      </Route>

      <Route exact path="/users/:userId(\d+)">
        <UserDetails />
      </Route>

      <Route exact path="/tags">
        <TagsList tags={tags} getAllTags={getAllTags} />
      </Route>

      <Route exact path="/components/posts">
        <PostList posts={posts} getPosts={getPosts} />
      </Route>
    </>
  )
}
