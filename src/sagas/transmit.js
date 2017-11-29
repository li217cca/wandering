import {fork, put, takeEvery, takeLatest, call, select} from 'redux-saga/effects'
import {} from '../action'

export default function *() {
    yield takeLatest(({type}) => {
        if (type.includes("RECEIPT")) return false
        if (type.includes("INNER")) return false
        if (type.includes("SUCCESS")) return false
        if (type.includes("ERROR")) return false
        return type.includes("MAP") 
            || type.includes("GAME")
            || type.includes("QUEST")
    }, function *(action) {
        const socket = yield select(state => state.server.socket)
        const request = action.payload !== undefined ?  action.payload : 0
        
        yield socket.Emit(action.type, request)
    })
}