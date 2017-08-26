/**
 * Created by cifer on 2017/8/23.
 */
import * as actions from '../../actions'
export default (state = {
    status: actions.AUTH_DISABLE,
    // user: {}
}, action) => {
    switch (action.type) {
        case actions.AUTH_SUCCESS: return {...state, status: action.type}
        case actions.AUTH_DISABLE: return {...state, status: action.type}
        case actions.AUTH_LOGIN: return {...state, status: action.type}
        case actions.AUTH_ERROR: return {...state, status: action.type}
    }
    return state
}