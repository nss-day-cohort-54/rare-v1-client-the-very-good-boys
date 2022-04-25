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
            <h3 className="post__title">{post.title}</h3>
            <div className="post__date">{post.publication_date}</div>
            <div className="post__content">{post.content}</div>

            <button onClick={() => deletePost(post.id).then(() => history.push("/posts"))} >Delete Post</button>

            <button onClick={() => {
                history.push(`/posts/edit/${post.id}`)
            }}>Edit</button>
        </section>
    )
}
