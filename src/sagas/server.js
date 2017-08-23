/**
 * Created by cifer on 2017/8/23.
 */
import {fork, put, takeEvery, takeLatest, call, select} from 'redux-saga/effects'
import Ws from '../iris-ws'

const getPromise = (func) => {
    return new Promise((resolve, reject) => {
        func(resolve)
    })
}

function *ListenConnect(socket) {
    const resp = yield getPromise(socket.OnConnect.bind(socket))
    yield put({type: "CONN_SUCCESS", payload: socket})
    // yield socket.Disconnect()
}
function *ListenDisconnect(socket) {
    const resp = yield getPromise(socket.OnDisconnect.bind(socket))
    yield put({type: "CONN_DISABLE"})
    // yield socket.Disconnect()
}

export default function *() {
    yield takeLatest("CONN_REQUIRE", function *(action) {
        // const socket = yield select(state => state.server.socket)
        // console.log("socket", socket)
        const socket = yield new Ws("ws://localhost:8080/echo")
        yield put({type: "CONN_TRYING"})
        yield fork(ListenDisconnect, socket)
        yield fork(ListenConnect, socket)
    })
}