/**
 * Created by cifer on 2017/8/23.
 */
import {fork, put, takeEvery, takeLatest, call, select} from 'redux-saga/effects'
import {AUTH_LOGIN, AUTH_SIGNIN, AUTH_SUCCESS, AUTH_ERROR} from '../action'

export default function *() {
    yield takeLatest(AUTH_LOGIN, function *(action) {
        const socket = yield select(state => state.server.socket)
        yield socket.Emit(AUTH_LOGIN, action.payload)
    })
    yield takeLatest(AUTH_SIGNIN, function *(action) {
        if (action.payload.password !== action.payload.password2) {
            yield put({type: AUTH_ERROR, payload: "两次输入密码不同"})
            return;
        }
        const socket = yield select(state => state.server.socket)
        yield socket.Emit(AUTH_SIGNIN, action.payload)
    })
}