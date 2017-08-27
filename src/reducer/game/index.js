/**
 * Created by cifer on 2017/8/25.
 */
import * as actions from '../../actions'
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
        case actions.GAME_RECEIPT_PARTY: {
            return {...state, party: action.payload}
        }
        case actions.GAME_RECEIPT_TIME: {
            return {...state, time: action.payload}
        }
        case actions.GAME_RECEIPT_SCENE: {
            return {...state, scene: {...action.payload, visible: true}}
        }
        case actions.GAME_RECEIPT_BAG: {
            return {...state, bag: {...action.payload}}
        }
        case actions.GAME_RECEIPT_USER: {
            return {...state, user: action.payload}
        }
        case actions.GAME_HANDLE_CARD: {
            return {...state, scene: {...state.scene, visible: false}}
        }
    }
    return state
}