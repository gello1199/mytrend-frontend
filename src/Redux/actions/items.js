export const setItem = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/items')
        .then(resp => resp.json())
        .then(data => dispatch({type: "SET_ITEMS", payload: data}))
    }
}

export const addItem = (item) => ({type: "ADD_ITEM", payload: item})