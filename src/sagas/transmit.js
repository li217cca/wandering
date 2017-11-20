import {fork, put, takeEvery, takeLatest, call, select} from 'redux-saga/effects'
import {} from '../action'

export default function *() {
    yield takeLatest(({type}) => {
        if (type.includes("RECEIPT")) return false
        return type.includes("MAP_") 
            || type.includes("GAME_")
    }, function *(action) {
        const socket = yield select(state => state.server.socket)
        const request = action.payload !== undefined ?  action.payload : 0
        
        yield socket.Emit(action.type, request)
    })
}