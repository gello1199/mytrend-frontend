export default function itemsReducer(state = {
    items: [],
    favorites: [], 
    }, action) {
    switch (action.type) {
        case "SET_ITEMS":
            return  {
                ...state,
                items: action.payload
            }

        case "ADD_ITEM":
            return {
                ...state,
                items: [...state.items, action.payload]
            }

        case "DELETE_ITEM":
            const filteredItems = state.items.filter(item => item.id !== action.payload) 

            return {
                ...state,
                items: filteredItems}

        // case "EDIT_ITEM":

        //     const itemIndex = state.items.findIndex(i => i.id === action.payload.id)

        //     return [
        //         ...state.slice(0, itemIndex),
        //         action.payload,
        //         ...state.slice(itemIndex + 1)
        //     ]

        case "ADD_TO_FAVORITES":
            return [
                ...state.favorites, action.payload
            ]
    
        default:
            return state
    }
}