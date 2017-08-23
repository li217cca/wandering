/**
 * Created by cifer on 2017/8/23.
 */
import {fork, put, takeEvery, takeLatest, call, select} from 'redux-saga/effects'
import actions from '../actions'
import Ws from '../iris-ws'

const getPromise = (func) => {
    return new Promise((resolve, reject) => {
        func(resolve)
    })
}

function *listenConnect(socket) {
    const resp = yield getPromise(socket.OnConnect.bind(socket))
    yield put({type: actions.CONN_SUCCESS, payload: socket})
    // yield socket.Disconnect()
}
function *listenDisconnect(socket) {
    const resp = yield getPromise(socket.OnDisconnect.bind(socket))
    yield put({type: actions.CONN_DISABLE})
    // yield socket.Disconnect()
}

export default function *() {
    yield takeLatest(actions.CONN_REQUIRE, function *(action) {
        // const socket = yield select(state => state.server.socket)
        const socket = yield new Ws("ws://localhost:8080/echo")
        yield put({type: actions.CONN_TRYING})
        yield fork(listenDisconnect, socket)
        yield fork(listenConnect, socket)
    })
    yield put({type: actions.CONN_REQUIRE})
}