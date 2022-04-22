import { useState } from "react/cjs/react.production.min"

export const UserDetails = ({users, selectedUser}) => {

    console.log(selectedUser)

   return <>
   <article className="userDetails">
            {
                users.map(
                    user => {
                        if(user.id === selectedUser){
                            return <div className="userDetails">
                                    <ul>
                                        <h2>Name</h2>
                                        <li className="name">
                                            {user.first_name} {user.last_name}
                                        </li>
                                        <hr />
                                        <h2>UserName</h2>
                                        <li className="username">
                                            {user.username}
                                        </li>
                                        <hr />
                                        <h2>Date User Created</h2>
                                        <li className="datecreated">
                                            {user.created_on}
                                        </li>
                                        <hr />
                                        <h2>Bio</h2>
                                        <li className="Bio">
                                            {user.bio}
                                        </li>
                                    </ul>
                                   </div>
                        }
                    }
                )
            }
    </article>
        </>
}