/**
 * Created by cifer on 2017/8/23.
 */
import {fork, put, takeEvery, takeLatest, call, select, TakeEffect} from 'redux-saga/effects'
import {AUTH_LOGIN, AUTH_SIGNUP, AUTH_SUCCESS, AUTH_ERROR} from '../action'
import { AUTH_BIND, CONN_SUCCESS, TOKEN_RECEIPT, AUTH_DISABLE } from '../action/action';

export default function *() {
    yield takeLatest(AUTH_LOGIN, function *(action) {
        const socket = yield select(state => state.server.socket)
        yield socket.Emit(AUTH_LOGIN, action.payload)
    })
    yield takeLatest(AUTH_BIND, function *(action) {
        const socket = yield select(state => state.server.socket)
        const token = localStorage.getItem("token")
        if (!token || token.length < 1) {
            yield put({type: AUTH_DISABLE})
            return
        }
        yield socket.Emit(AUTH_BIND, token)
    })
    yield takeLatest(AUTH_ERROR, function *(action) {
        yield localStorage.removeItem("token") // remove token
    })
    yield takeLatest(TOKEN_RECEIPT, function *(action) {
        const token = yield action.payload
        if (!!token && token.length > 0) {
            yield localStorage.setItem("token", token)
        }
    })
    yield takeLatest(AUTH_SIGNUP, function *(action) {
        if (action.payload.password !== action.payload.password2) {
            yield put({type: AUTH_ERROR, payload: "两次输入密码不同"})
            return;
        }
        const socket = yield select(state => state.server.socket)
        yield socket.Emit(AUTH_SIGNUP, action.payload)
    })
    yield takeLatest(CONN_SUCCESS, function *(action) {
        yield put({type: AUTH_BIND})
    })
}