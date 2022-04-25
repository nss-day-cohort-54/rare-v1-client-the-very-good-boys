import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export const UserDetails = () => {

    const [selectedUser, setSelectedUser] = useState({})
    const { userId } = useParams();

    useEffect(
        () => {
            fetch(`http://localhost:8088/users/${userId}`)
                .then(res => res.json())
                .then((userObject) => {
                    setSelectedUser(userObject)
                })
        },
        [userId]
    )
console.log(selectedUser)

    return ( 
    <>
        <article className="userDetails">

            <ul>
                <h2>Name</h2>
                <li className="name">
                    {selectedUser.first_name} {selectedUser.last_name}
                </li>
                <hr />
                <h2>UserName</h2>
                <li className="username">
                    {selectedUser.username}
                </li>
                <hr />
                <h2>Date User Created</h2>
                <li className="datecreated">
                    {selectedUser.created_on}
                </li>
                <hr />
                <h2>Bio</h2>
                <li className="Bio">
                    {selectedUser.bio}
                </li>
            </ul>
            <button className="subscribe">Subscribe</button>


            

        </article>
    </>
    )
}