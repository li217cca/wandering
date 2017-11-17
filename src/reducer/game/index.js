/**
 * Created by cifer on 2017/8/25.
 */
import {GAME_RECEIPT_PARTY, GAME_RECEIPT_TIME, GAME_RECEIPT_SCENE, 
    GAME_RECEIPT_BAG, GAME_RECEIPT_USER, GAME_HANDLE_CARD} from '../../action'
export default (state = {
    party: [],
    time: {},
    scene: {
        cards: []
    },
    user: {},
    bag: {
        capacity: 0,
        capacity_limit: 0,
        weight: 0,
        weight_limit: 0,
        items: []
    }
}, action) => {
    switch (action.type){
        case GAME_RECEIPT_PARTY: {
            return {...state, party: action.payload}
        }
        case GAME_RECEIPT_TIME: {
            return {...state, time: action.payload}
        }
        case GAME_RECEIPT_SCENE: {
            return {...state, scene: {...action.payload, visible: true}}
        }
        case GAME_RECEIPT_BAG: {
            return {...state, bag: {...action.payload}}
        }
        case GAME_RECEIPT_USER: {
            return {...state, user: action.payload}
        }
        case GAME_HANDLE_CARD: {
            return {...state, scene: {...state.scene, visible: false}}
        }
    }
    return state
}