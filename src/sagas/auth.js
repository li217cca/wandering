/**
 * Created by cifer on 2017/8/23.
 */
import {fork, put, takeEvery, takeLatest, call, select} from 'redux-saga/effects'
import {AUTH_LOGIN, AUTH_SIGNIN} from '../actions'

export default function *() {
    yield takeLatest(AUTH_LOGIN, function *(action) {
        const socket = yield select(state => state.server.socket)
        yield socket.Emit(AUTH_LOGIN, action.payload)
    })
    yield takeLatest(AUTH_SIGNIN, function *(action) {
        const socket = yield select(state => state.server.socket)
        yield socket.Emit(AUTH_SIGNIN, action.payload)
    })
}