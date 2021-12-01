export default function itemsReducer(state = [], action) {
    switch (action.type) {
        case "SET_ITEMS":
            return [...state, action.item]
    
        default:
            return state
    }
}