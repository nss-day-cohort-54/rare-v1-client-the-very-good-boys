import { useEffect, useState } from "react"


export const UserList = () => {

    const [users, setUsers] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/users")
                .then(res => res.json())
                .then((usersArray) => {
                    setUsers(usersArray)
                })
        },
        []
    )

    return (
        <article className="userListContainer">
            <h1 className="userListHeader">Users</h1>
            {
                users.map(
                    user => {
                        return <li className="users">{user.first_name} {user.last_name}</li>
                    }
                )
            }
        </article>
    )
}