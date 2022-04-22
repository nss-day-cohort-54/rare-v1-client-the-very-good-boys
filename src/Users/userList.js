import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export const UserList = ({users}) => {



    return (
        <article className="userListContainer">
            <h1 className="userListHeader">Users</h1>
            {
                users.map(
                    user => {
                        return <>
                              <div>
                               <Link  to={{pathname:"/userdetails", selectedUser: user.id }}>{user.first_name} {user.last_name}</Link>
                               
                               </div>
                               </>
                    }
                )
            }
        </article>
    )
}