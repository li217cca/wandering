/**
 * Created by cifer on 2017/8/25.
 */
import * as actions from '../../actions'
export default (state = {
    party: {},
    time: {},
    scene: {
        cards: [],
        time: 0
    }
}, action) => {
    switch (action.type){
        case actions.GAME_GET_PARTY_SUCCESS: {
            return {...state, party: action.payload}
        }
        case actions.GAME_GET_TIME_SUCCESS: {
            return {...state, time: action.payload}
        }
        case actions.GAME_GET_SCENE_SUCCESS: {
            return {...state, scene: {...action.payload, visible: true}}
        }
        case actions.GAME_HANDLE_CARD: {
            return {...state, scene: {...state.scene, visible: false}}
        }
    }
    return state
}