export default function itemsReducer(state = [], action) {
    switch (action.type) {
        case "SET_ITEMS":
            
            return action.payload 

        case "ADD_ITEM":
            return [...state, action.payload]

        case "DELETE_ITEM":
            const filteredItems = state.filter(item => item.id !== action.payload) 

            return filteredItems

        case "EDIT_FAVORITES":

            const itemIndex = state.findIndex(i => i.id === action.payload.id )

            return [
                ...state.slice(0, itemIndex),
                action.payload,
                ...state.slice(itemIndex + 1)
            ]

            
        default:
            return state
    }
}