import { useState, useEffect, useRef } from "react"
import { deleteTag, addTag, getTags, getTagById, updateTag } from "./TagsManger"
import { ReactComponent as EditIcon } from ".//icons8-edit.svg"
import { ReactComponent as DeleteIcon} from ".//icons8-delete.svg"

export const TagsList = ({ tags, getAllTags }) => {
    // this component will return tags in a list view from our Tags table
    // we pass in the tags as a prop for easier state management
    const currentTagReference = useRef({})
    const [tag, setTag] = useState({})
    const [editMode, setEditMode] = useState(false)
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
        deleteTag(id).then(getAllTags)
    }

    // and a function that will add tags and update the state on click
    const onSubmissionOfTag = (tag) => {
        if (tag.id) {
            updateTag(tag).then(getAllTags)
        } else {
            addTag(tag).then(getAllTags)
        }
    }

    // add a function that will update the state of a single tag on click 
    const onClickOfEditButton = (tagId) => {
        getTagById(tagId).then((data) => setTag(data))
        currentTagReference.current = tagId
    }

    const handleControlledInputChange = (event) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newTag = Object.assign({}, updatedTag)
        newTag[event.target.name] = event.target.value
        setUpdatedTag(newTag)
    }

    // we need a function that adds our array of checked tags to our object
    const constructNewEntry = () => {
        const copyTag = { ...updatedTag }
        onSubmissionOfTag(copyTag)
    }

    // this component will have two parts
    // a container that has our list of tags and container with a tag entry form
    return(
        <>
            <h1>Tags</h1>
            <div className="tags-page">
                <div className='tags-list'>
                    {
                        tags.map((tag) => {
                            return <div key={tag.id}>
                                        <p>{tag.label}</p>
                                        <button className="tag-edit-button" onClick={() => {onClickOfEditButton(tag.id)}}>
                                            <EditIcon/>
                                        </button>
                                        <button className="tag-delete-button" onClick={() => {deleteTagOnClick(tag.id)}}>
                                            <DeleteIcon/>
                                        </button>
                                    </div>
                        })
                    }
                </div>
                <div className="tag-form">
                    <h2 className="panel-heading">{editMode ? "Update Tag" : "Create Tag"}</h2>
                    <div className="panel-block">
                        <form style={{ width: "50%" }}>
                            <div className="field">
                                <label htmlFor="concept" className="label">Tag Name: </label>
                                <div className="control">
                                    <input type="text" name="label" required autoFocus className="input"
                                        proptype="varchar"
                                        placeholder={currentTagReference ? `${tag.label}`:"Label"}
                                        value={updatedTag.label}
                                        onChange={handleControlledInputChange}
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <button type="submit"
                                        onClick={evt => {
                                            evt.preventDefault()
                                            constructNewEntry()
                                        }}
                                        className="button is-link">
                                        {editMode ? "Update" : "Create"}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}