/**
 * Created by cifer on 2017/8/20.
 */
import { combineReducers } from 'redux'
import auth from './auth'
import server from './server'
import game from './game'
import { INFO_CREATE, INFO_DELETE, LOADING_AWAIT, LOADING_FINISH } from '../action/action';

const infoReducer = (state = [], action) => {
    switch (action.type) {
        case INFO_CREATE: {
            return [...state, action.payload]
        }
        case INFO_DELETE: {
            return state.filter(msg => msg != action.payload)
        }
    }
    return state
}
const loadingReducer = (state = [], {type, payload}) => {
    switch (type) {
        case LOADING_AWAIT: {
            return [...state, payload]
        }
        case LOADING_FINISH: {
            return state.filter(msg => msg != payload)
        }
    }
    return state
}

export default combineReducers({
    auth,
    server,
    game,
    info: infoReducer,
    loading: loadingReducer
})