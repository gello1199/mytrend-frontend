export default function itemsReducer(state = [], action) {
    switch (action.type) {
        case "SET_ITEMS":
            return action.payload

        case "ADD_ITEM":
            return [...state, action.payload]

        case "DELETE_ITEM":
            const newItem = state.filter(item => item.id !== action.payload) 

            return {...state, newItem}

        // case "EDIT_ITEM":

        //     const itemIndex = state.findIndex(i => i.id === action.payload.id)

        //     return {
        //         ...state,
        //         [
        //             ...state.slice(0, itemIndex),
        //             action.payload,
        //             ...state.slice(itemIndex + 1)
        //         ]
        //     }

    
        default:
            return state
    }
}