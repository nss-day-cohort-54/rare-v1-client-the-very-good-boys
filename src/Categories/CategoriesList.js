import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import "./CategoryList.css"

export const CategoryList = () => {
    const [categories, setCategories ] = useState([])
    const [category, updateCategory] = useState({
        label: ""
    })

    useEffect(
        () => {
            fetch("http://localhost:8088/categories")
                .then(res => res.json())
                .then((data) => {
                    setCategories(data)
            })
        },[]
    )

    const saveCategory = (evt) => { 
        evt.preventDefault()
        const newCategory = {
            label: category.label,
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCategory)
        }
        return fetch("http://localhost:8088/categories", fetchOption)
            .then(() => {
                history.push("")
            })}

    useEffect(
        () => {

        },
    []
    )



    return (
        <div className="body">
            <div className="categoriesHeader">Categories</div>
            <div className="categoryPageContainer"> 
                <div className="categories">{
                    categories.map(
                        category => {
                        return <div className="categoryRow"> 
                            <button className="button">edit</button>
                            <button className="button">delete</button>
                            <Link className="categoriesName">{category.label}</Link>
                            </div>
                        }
                    )
                }</div>
                <div className="createContainer">
                    <div className="categoryHeader"> 
                    Create a new category
                    </div>
                    <fieldset className="categoryForm">
                        <div className="labelField"> 
                        <input onChange={
                                    (evt) => {
                                        const copy = {...category}
                                        copy.label = evt.target.value
                                        updateCategory(copy)
                                    }
                                }       
                                required autoFocus
                                type="text" id= "label"
                                className="form-control"
                                placeholder="Category Label"
                            />
                        </div>    
                    </fieldset>
                    <button onClick={saveCategory} to="/categories" className="saveButton">
                        Create
                    </button>
                </div>
            </div>
        </div>
    )
}    