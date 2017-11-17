/**
 * Created by cifer on 2017/8/23.
 */
import {CONN_DISABLE, CONN_TRYING, CONN_SUCCESS} from '../../action'
export default (state = {
    status: CONN_DISABLE,
    socket: null
}, action) => {
    switch (action.type){
        case CONN_TRYING: {
            return {...state, status: action.type}
        }
        case CONN_SUCCESS: {
            return {...state, status: action.type, socket: action.payload}
        }
        case CONN_DISABLE: {
            return {...state, status: action.type, socket: null}
        }
    }
    return state
}