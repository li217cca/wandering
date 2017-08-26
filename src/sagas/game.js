/**
 * Created by cifer on 2017/8/25.
 */
import {fork, put, takeEvery, takeLatest, call, select} from 'redux-saga/effects'
import * as actions from '../actions'

export default function *() {
    yield takeLatest((action) => {
        return action.type.includes("GAME_GET_") && !action.type.includes("SUCCESS")
    }, function *(action) {
        const socket = yield select(state => state.server.socket)
        yield socket.Emit(action.type, action.payload)
    })
}