/**
 * Created by cifer on 2017/8/25.
 */
import {fork, put, takeEvery, takeLatest, call, select} from 'redux-saga/effects'
import * as actions from '../actions'

export default function *() {
    yield takeLatest((action) => {
        return action.type.includes("GAME_") && !action.type.includes("RECEIPT")
    }, function *(action) {
        const socket = yield select(state => state.server.socket)
        const request = action.payload !== undefined ?  action.payload : 0
        // console.log("emit", action.type, request)
        yield socket.Emit(action.type, request)
    })
}