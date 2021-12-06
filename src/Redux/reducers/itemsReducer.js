export default function itemsReducer(state = [], action) {
    switch (action.type) {
        case "SET_ITEMS":
            return action.payload

        case "ADD_ITEM":
            return [...state, action.payload]

        case "DELETE_ITEM":
            const newItem = state.filter(item => item.id !== action.payload) 

            return {...state, newItem}

    
        default:
            return state
    }
}