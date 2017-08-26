/**
 * Created by cifer on 2017/8/23.
 */
import * as actions from '../../actions'
export default (state = {
    status: actions.CONN_DISABLE,
    socket: null
}, action) => {
    switch (action.type){
        case actions.CONN_TRYING: {
            return {...state, status: action.type}
        }
        case actions.CONN_SUCCESS: {
            return {...state, status: action.type, socket: action.payload}
        }
        case actions.CONN_DISABLE: {
            return {...state, status: action.type, socket: null}
        }
    }
    return state
}