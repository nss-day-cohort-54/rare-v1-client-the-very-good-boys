import React from "react"
import { Route } from "react-router-dom"
import { TagsList } from "./tags/TagsList"
import { UserList } from "../Users/userList"
import { PostList } from "./posts/PostList"
import { PostForm } from "./posts/PostForm.js"
import { PostDetails } from "./posts/PostDetail.js"
export const ApplicationViews = ( { tags } ) => {
  return (
    <>
      <h1 >Welcome to Rare Publishing</h1>
      <Route exact path="/tags">
        <TagsList tags={tags} />
      </Route>
      <Route exact path="/userManagement">
        <UserList />
      </Route>
      <Route exact path="/posts">
                <>
                    <main className="postContainer">
                        <h1>Posts</h1>

                        <PostList />
                    </main>
                </>
            </Route>

            <Route exact path="/posts/create">
                <PostForm />
            </Route>

            <Route path="/posts/:postId(\d+)">
                <PostDetails />
            </Route>

            <Route path="/posts/edit/:postId(\d+)">
                <PostForm />
            </Route>

    </>
    
  )
}
