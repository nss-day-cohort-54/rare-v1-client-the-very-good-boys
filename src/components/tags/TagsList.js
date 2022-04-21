import { getTags } from './TagsManger'
import { useState, useEffect } from 'react'

export const TagsList = ({ tags }) => {

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