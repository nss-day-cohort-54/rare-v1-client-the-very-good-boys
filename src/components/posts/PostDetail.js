import React, { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"

import { getPostById, deletePost } from "./PostManager"
import "./Posts.css"

export const PostDetails = () => {
    //const [post, setPost] = useState({ location: {}, customer: {} })
    const { postId } = useParams()
    const history = useHistory()

    useEffect(() => {
        getPostById(postId)
            .then(setPost)
    }, [])

    return (
        <section className="post">
            <h3 className="post__name">{post.name}</h3>
            <div className="post__breed">{post.breed}</div>
            <div className="post__location">Location: {post.location?.name}</div>
            <div className="post__owner">Customer: {post.customer?.name}</div>
            <div className="post__status">Status: {post.status}</div>

            <button onClick={() => deletePost(post.id).then(() => history.push("/posts"))} >Release Post</button>

            <button onClick={() => {
                history.push(`/posts/edit/${post.id}`)
            }}>Edit</button>
        </section>
    )
}
