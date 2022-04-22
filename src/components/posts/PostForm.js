import React, { useState, useEffect } from "react"
import { addPost, updatePost, getPostById } from "./PostManager"
import { useParams, useHistory } from 'react-router-dom'

export const PostForm = () => {
    // Use the required context providers for data
    const [locations, setLocations] = useState([])
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
        const locationId = parseInt(post.locationId)

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            if (editMode) {
                // PUT
                updatePost({
                    id: post.id,
                    name: post.name,
                    breed: post.breed,
                    locationId: locationId,
                    status: post.status,
                    customerId: parseInt(localStorage.getItem("kennel_customer"))
                })
                    .then(() => history.push("/posts"))
            } else {
                // POST
                addPost({
                    name: post.name,
                    breed: post.breed,
                    locationId: locationId,
                    status: post.status,
                    customerId: parseInt(localStorage.getItem("kennel_customer"))
                })
                    .then(() => history.push("/posts"))
            }
        }
    }

    return (
        <form className="postForm">
            <h2 className="postForm__title">{editMode ? "Update Post" : "Admit Post"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Post name: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        placeholder="Post name"
                        defaultValue={post.name}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="breed">Post breed: </label>
                    <input type="text" name="breed" required className="form-control"
                        placeholder="Post breed"
                        defaultValue={post.breed}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="locationId">Location: </label>
                    <select name="locationId" className="form-control"
                        value={post.location_id}
                        onChange={handleControlledInputChange}>

                        <option value="0">Select a location</option>
                        {
                            locations.map(e => (
                                <option key={e.id} value={e.id}>
                                    {e.name}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="status">Status: </label>
                    <textarea type="text" name="status" className="form-control"
                        value={post.status}
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
                {editMode ? "Save Updates" : "Make Reservation"}
            </button>
        </form>
    )
}
