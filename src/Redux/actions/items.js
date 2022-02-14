export const setItem = () => {
    return (dispatch) => {
        fetch('https://mytrends-app.herokuapp.com/items')
        .then(resp => resp.json())
        .then(data => dispatch({type: "SET_ITEMS", payload: data}))
    }
}

export const addItem = (item, redirect) => {
    return (dispatch) => {
        fetch('https://mytrends-app.herokuapp.com/items', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"

            },
            body: JSON.stringify(item)
        }) 
        .then(resp => resp.json())
        .then(data => {if(data.error) {
            alert(data.error.join(', '))
        } else {
            dispatch({type: "ADD_ITEM", payload: data})
            // debugger
             redirect.push('/trends')
        }})

    }
}

export const deleteItem  = (id) => {
    return (dispatch) => {
        fetch(`https://mytrends-app.herokuapp.com/items/${id}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(itemId => dispatch({type: "DELETE_ITEM", payload: id}))
    }
}

export const editFavorites = (item) => {
    return (dispatch) => {
        fetch(`https://mytrends-app.herokuapp.com/items/${item.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                item: {
                favorite: !item.favorite
            }})
        })
        .then(resp => resp.json())
        .then(i => dispatch({type: "EDIT_FAVORITES", payload: i}))
    }
}



