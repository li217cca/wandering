/**
 * Created by cifer on 2017/8/23.
 */
import {fork, put, takeEvery, takeLatest, call, select, TakeEffect} from 'redux-saga/effects'
import {AUTH_LOGIN, AUTH_SIGNUP, AUTH_SUCCESS, AUTH_ERROR} from '../action'
import { AUTH_BIND, CONN_SUCCESS, TOKEN_RECEIPT, AUTH_DISABLE, LOADING_AWAIT, LOADING_FINISH, CONN_TRYING, CONN_DISABLE } from '../action/action';
import { newInfo } from '../action/creator';


export default function *() {
    yield takeLatest(AUTH_LOGIN, function *(action) {
        const socket = yield select(state => state.server.socket)
        yield put({type: LOADING_AWAIT, payload: "登入中.."})
        yield socket.Emit(AUTH_LOGIN, action.payload)
    })
    yield takeLatest(AUTH_BIND, function *(action) {
        const socket = yield select(state => state.server.socket)
        const token = localStorage.getItem("token")
        if (!token || token.length < 1) {
            yield put({type: AUTH_DISABLE})
            return
        }
        yield put({type: LOADING_AWAIT, payload: "登入中.."})
        yield socket.Emit(AUTH_BIND, token)
    })
    yield takeLatest(AUTH_ERROR, function *(action) {
        yield put(newInfo(action.payload, 1500))
        yield put({type: LOADING_FINISH, payload: "登入中.."})
        yield put({type: LOADING_FINISH, payload: "注册中.."})
        yield localStorage.removeItem("token") // remove token
    })
    yield takeLatest(TOKEN_RECEIPT, function *(action) {
        const token = yield action.payload
        if (!!token && token.length > 0) {
            yield localStorage.setItem("token", token)
        }
    })
    yield takeLatest(AUTH_SUCCESS, function*({payload}) {
        yield put({type: LOADING_FINISH, payload: "登入中.."})
        yield put({type: LOADING_FINISH, payload: "注册中.."})
        yield put(newInfo(payload, 1000))
    })
    yield takeLatest(AUTH_SIGNUP, function *(action) {
        if (action.payload.password !== action.payload.password2) {
            yield put(newInfo("两次输入密码不同", 1500))
            return;
        }
        yield put({type: LOADING_AWAIT, payload: "注册中.."})
        const socket = yield select(state => state.server.socket)
        yield socket.Emit(AUTH_SIGNUP, action.payload)
    })
    yield takeLatest(CONN_SUCCESS, function *(action) {
        yield put({type: LOADING_FINISH, payload: "连接至服务器.."})
        yield put({type: AUTH_BIND})
    })
    yield takeLatest(CONN_DISABLE, function*() {
        yield put({type: LOADING_FINISH, payload: "连接至服务器.."})
    })
    yield takeLatest(CONN_TRYING, function*() {
        yield put({type: LOADING_AWAIT, payload: "连接至服务器.."})
    })
}