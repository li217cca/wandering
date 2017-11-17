/**
 * Created by cifer on 2017/8/23.
 */
import {AUTH_SUCCESS, AUTH_SWITCH, AUTH_LOGIN, AUTH_SIGNIN, AUTH_ERROR, AUTH_DISABLE} from '../../action'
export default (state = {
    status: AUTH_DISABLE,
    resp: "请输入.."
    // user: {}
}, action) => {
    switch (action.type) {
        case AUTH_SUCCESS: return {...state, status: action.type, resp: action.payload}
        case AUTH_SWITCH: return {...state, status: action.type, resp: "请输入.."}
        case AUTH_LOGIN: return {...state, status: action.type, resp: "登陆中.."}
        case AUTH_SIGNIN: return {...state, status: action.type, resp: "注册中.."}
        case AUTH_ERROR: return {...state, status: action.type, resp: action.payload}
    }
    return state
}