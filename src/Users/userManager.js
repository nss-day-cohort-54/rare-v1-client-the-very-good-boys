export const getUsers = () => {
    fetch("http://localhost:8088/users")
        .then(res => res.json())
}