export const setItem = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/items')
        .then(resp => resp.json())
        .then(data => dispatch({type: "SetItems", payload: data}))
    }
}