/**
 * Created by cifer on 2017/8/25.
 */
import { GAME_RECEIPT_LIST, GAME_RECEIPT } from '../../action/action';
export default (state = {
    list: [],
    info: null,
}, action) => {
    switch (action.type){
        case GAME_RECEIPT_LIST: {
            return {...state, list: action.payload}
        }
        case GAME_RECEIPT: {
            return {...state, info: action.payload}
        }
    }
    return state
}