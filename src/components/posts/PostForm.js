import React, { useState, useEffect } from "react"
import { addPost, updatePost, getPostById } from "./PostManager"
import { useParams, useHistory } from 'react-router-dom'

export const PostForm = () => {
    // Use the required context providers for data
    const { postId } = useParams()
    // Component state
    const [post, setPost] = useState({})
    const history = useHistory()

    // Is there a a URL parameter??
    const editMode = postId ? true : false  // true or false

    const handleControlledInputChange = (event) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newPost = Object.assign({}, post)          // Create copy
        newPost[event.target.name] = event.target.value    // Modify copy
        setPost(newPost)                                 // Set copy as new state
    }

    // Get posts from API when component initializes
    useEffect(() => {
        if (editMode) {
            getPostById(postId).then((res) => {
                setPost(res)
            })
        }
    }, [])

    const constructNewPost = () => {
        
        if (editMode) {
            // PUT
            updatePost({
                id: post.id,
                userId: parseInt(localStorage.getItem("token")),
                categoryId: post.category_id,
                title: post.title,
                publicationDate: post.publication_date,
                imageURL: post.image_url,
                content: post.content,
                approved: post.approved
            })
                .then(() => history.push("/posts"))
        } else {
            // POST
            addPost({
                id: post.id,
                userId: parseInt(localStorage.getItem("token")),
                categoryId: post.category_id,
                title: post.title,
                publicationDate: post.publication_date,
                imageURL: post.image_url,
                content: post.content,
                approved: post.approved
            })
                .then(() => history.push("/posts"))
        }
        
    }


    //Title, author's name, category, publication date, content
    return (
        <form className="postForm">
            <h2 className="postForm_title">{editMode ? "Update Post" : "Admit Post"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Post Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        placeholder="Post title"
                        defaultValue={post.title}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="post_category">Post category: </label>
                    <input type="text" name="category" required className="form-control"
                        placeholder="Post category"
                        defaultValue={post.category_id}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="author_name">Author name: </label>
                    <textarea type="text" name="author_name" className="form-control"
                        value={post.author_name}
                        onChange={handleControlledInputChange}>
                    </textarea>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="author_name">Author name: </label>
                    <textarea type="text" name="author_name" className="form-control"
                        value={post.author_name}
                        onChange={handleControlledInputChange}>
                    </textarea>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="publication_date">Publication date: </label>
                    <textarea type="text" name="publication_date" className="form-control"
                        value={post.publication_date}
                        onChange={handleControlledInputChange}>
                    </textarea>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="content">Content: </label>
                    <textarea type="text" name="content" className="form-control"
                        value={post.content}
                        onChange={handleControlledInputChange}>
                    </textarea>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    constructNewPost()
                }}
                className="btn btn-primary">
                {editMode ? "Save Updates" : "Create Post"}
            </button>
        </form>
    )
}
