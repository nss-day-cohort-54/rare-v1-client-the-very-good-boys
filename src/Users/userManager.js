export const getUsers = () => {
     return fetch("http://localhost:8088/users")
        .then(res => res.json())
}

export const getUserById = (id) => {
    return fetch(`http://localhost:8088/users/${id}`)
        .then(res => res.json())
}


export const deleteUser = (id) => {
    return fetch(`http://localhost:8088/users/${id}`, {
        method: "DELETE"
    })
}

export const updateUser = (user) => {
    return fetch(`http://localhost:8088/users/${user.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
}