import { useState, useEffect } from "react"
import { deleteTag, addTag, getTags, getTagById, updateTag } from "./TagsManger"

export const TagsList = ({ tags }) => {
    // this component will return tags in a list view from our Tags table
    // we pass in the tags as a prop for easier state management
    const [tag, setTag] = useState({})
    const [edit, setEditMode] = useState(false)
    const [updatedTag, setUpdatedTag] = useState(tag)
    // we need a function that will delete tags and update the state on click
    useEffect(
        () => {
            setUpdatedTag(tag)
            if('id' in tag) {
                setEditMode(true)
            } else {
                setEditMode(false)
            }
        }, [tag]
    )

    const deleteTagOnClick = (id) => {
        deleteTag(id).then(getTags)
    }

    // and a function that will add tags and update the state on click
    const addTagOnSubmit = (tag) => {
        if (tag.id) {
            updateTag(tag).then(getTags)
        } else {
            addTag(tag)
        }
    }
    
    // add a function that will update the state of a single tag on click 
    const onClickOfEditButton = (tagId) => {
        getTagById(tagId).then(data => setTag(data))
    }

    // this component will have two parts
    return(
        <>
            <h2>Tags</h2>
            <div className='tags-list'>
                {
                    tags.map((tag) => {
                        return <div>{tag.label}</div>
                    })
                }
            </div>
        </>
    )
}