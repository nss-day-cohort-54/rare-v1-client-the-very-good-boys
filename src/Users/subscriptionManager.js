export const getSubscriptions = () => {
    return fetch("http://localhost:8088/subscriptions")
       .then(res => res.json())
}

export const deletesubscription = (id) => {
    return fetch(`http://localhost:8088/subscriptions/${id}`, {
        method: "DELETE"
    })
}

export const newSubscription = subscription => {
    return fetch("http://localhost:8088/subscriptions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(subscription)
    }).then(getSubscriptions());
  };