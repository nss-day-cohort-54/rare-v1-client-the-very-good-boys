import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getSubscriptions } from "./subscriptionManager"

export const UserDetails = () => {

    const [selectedUser, setSelectedUser] = useState({})
    const [subscribe, setSubscribe] = useState({})
    const [subscriptions, setSubscriptions] = useState([])

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

    const getAllSubscriptions = () => {
        getSubscriptions().then(data => setSubscriptions(data))
      }

    const onFormSubmit = (subscribeData) => {
        console.log("submit", subscribeData)
        if (subscribeData.id) {
          updateEntry(subscribeData).then(getAllSubscriptions())
        } else {
          addEntry(subscribeData).then(getAllSubscriptions())
        }
        setSubscribe({
          follower_id: 0,
          author_id: 0,
          created_on: 0
        })
      }

      const newSubscription = () => {
        const copyEntry = { ...updatedEntry }
        copyEntry.moodId = parseInt(copyEntry.moodId)
        copyEntry.tags = selectedTags
        if (!copyEntry.date) {
            copyEntry.date = Date(Date.now()).toLocaleString('en-us').split('GMT')[0]
        }
        onFormSubmit(copyEntry)
    }
    

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