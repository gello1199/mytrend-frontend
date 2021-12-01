import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import itemsReducer from './reducers/itemsReducer'

export default createStore(itemsReducer, applyMiddleware(thunk))