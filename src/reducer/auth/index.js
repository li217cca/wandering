/**
 * Created by cifer on 2017/8/23.
 */
import * as actions from '../../actions'
export default (state = {
    status: actions.AUTH_DISABLE,
    resp: "请输入.."
    // user: {}
}, action) => {
    switch (action.type) {
        case actions.AUTH_SUCCESS: return {...state, status: action.type, resp: action.payload}
        case actions.AUTH_SWITCH: return {...state, status: action.type, resp: "请输入.."}
        case actions.AUTH_LOGIN: return {...state, status: action.type, resp: "登陆中.."}
        case actions.AUTH_SIGNIN: return {...state, status: action.type, resp: "注册中.."}
        case actions.AUTH_ERROR: return {...state, status: action.type, resp: action.payload}
    }
    return state
}