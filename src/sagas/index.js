/**
 * Created by cifer on 2017/8/21.
 */
import {fork, put, takeEvery, takeLatest, call, select} from 'redux-saga/effects'
import auth from './auth'
import transmit from './transmit'

export default function*() {
    yield takeEvery("*", (action) => {
        // console.log("saga take", action)
    })
    // yield fork(server)
    yield fork(auth)
    yield fork(transmit)
}