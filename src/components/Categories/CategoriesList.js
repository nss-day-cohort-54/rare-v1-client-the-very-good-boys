import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export const CategoryList = () => {
    const [categories, setCategories ] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/categories")
                .then(res => res.json())
                .then((data) => {
                    setCategories(data)
            })
        },[]
    )
    useEffect(
        () => {

        },
    []
    )



    return (
        <div className="body">
            <div className="categoriesHeader">Categories</div>
        </div>
    )
}    