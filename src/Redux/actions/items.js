export const setItem = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/items')
        .then(resp => resp.json())
        .then(data => dispatch({type: "SET_ITEMS", payload: data}))
    }
}

export const addItem = (data) => {
    return (dispatch) => {
        fetch('http://localhost:3000/items', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"

            },
            body: JSON.stringify(data)
        }) 
        .then(resp => resp.json())
        .then(data => dispatch({type: "ADD_ITEM", payload: data}))
    }
}

export const deleteItem  = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/items/${id}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(itemId => dispatch({type: "DELETE_ITEM", payload: id}))
    }
}

export const addToFavorites = (item) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/items/${item.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        })
        .then(resp => resp.json())
        .then(i => dispatch({type: "ADD_TO_FAVORITES", payload: i}))
    }
}

// figure out how data structured on the backend
// how i want redux setup

