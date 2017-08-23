/**
 * Created by cifer on 2017/8/23.
 */
import {fork, put, takeEvery, takeLatest, call, select} from 'redux-saga/effects'
import actions from '../actions'

const curring = (func, ...args) => {
    return (...args2) => {
        func(...args, ...args2)
    }
}

const getPromise = (func) => {
    return new Promise((resolve, reject) => {
        func(resolve)
    })
}

function *listenLogin(socket) {
    const resp = yield getPromise(curring(socket.On.bind(socket), "login"))
    console.log("listen login", resp)
    if (resp === "success") {
        yield put({type: actions.AUTH_SUCCESS, payload: resp})
    } else {
        yield put({type: actions.AUTH_ERROR, payload: resp})
    }
    // yield socket.Disconnect()
}

export default function *() {
    yield takeLatest(actions.AUTH_LOGIN, function *(action) {
        const socket = yield select(state => state.server.socket)
        yield socket.Emit("login", action.payload)
        yield fork(listenLogin, socket)
    })
}