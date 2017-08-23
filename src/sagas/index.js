/**
 * Created by cifer on 2017/8/21.
 */
import {fork, put, takeEvery, takeLatest, call, select} from 'redux-saga/effects'
import server from './server'
import auth from './auth'

export default function*() {
    yield takeEvery("*", (action) => {
        console.log("saga take", action)
    })
    // yield fork(server)
    yield fork(auth)
}