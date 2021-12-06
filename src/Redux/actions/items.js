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