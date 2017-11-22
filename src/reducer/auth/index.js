/**
 * Created by cifer on 2017/8/23.
 */
import {AUTH_SUCCESS, AUTH_SWITCH, AUTH_LOGIN, AUTH_SIGNUP, AUTH_ERROR, AUTH_DISABLE} from '../../action'
import { AUTH_BIND } from '../../action/action';
export default (state = {
    status: AUTH_DISABLE
}, action) => {
    switch (action.type) {
        case AUTH_SUCCESS: return {...state, status: action.type, resp: action.payload}
        case AUTH_SWITCH: return {...state, status: action.type}
        case AUTH_DISABLE: return {...state, status: action.type}
        case AUTH_LOGIN: return {...state, status: action.type}
        case AUTH_BIND: return {...state, status: action.type}
        case AUTH_SIGNUP: return {...state, status: action.type}
    }
    return state
}