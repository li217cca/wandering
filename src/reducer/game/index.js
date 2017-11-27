/**
 * Created by cifer on 2017/8/25.
 */
import { GAME_RECEIPT_LIST, GAME_RECEIPT, MAP_RECEIPT, GAME_CHANGE_VIEW_INNER } from '../../action/action';
import { ViewSelectGame } from '../../action/creator';
export default (state = {
    list: [],
    info: null,
    map: null,
    mapIDMap: new Map(),
    view: ViewSelectGame
}, action) => {
    switch (action.type){
        case GAME_RECEIPT_LIST: {
            return {...state, list: action.payload}
        }
        case GAME_RECEIPT: {
            const game = action.payload
            const now_map = game.maps.find(map => map.id === game.map_id)
            game.maps.forEach(map => {
                state.mapIDMap.set(map.id, map)
            })
            return {
                ...state, 
                info: game,
                map: now_map
            }
        }
        case GAME_CHANGE_VIEW_INNER: {
            return {
                ...state,
                view: action.payload
            }
        }
        case MAP_RECEIPT: {
            return {
                ...state,
                map: action.payload.id === state.info.map_id ? action.payload : state.map,
                mapIDMap: state.mapIDMap.set(action.payload.id, action.payload)
            }
        }
    }
    return state
}