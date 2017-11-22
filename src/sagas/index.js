/**
 * Created by cifer on 2017/8/21.
 */
import {fork, put, takeEvery, takeLatest, call, select} from 'redux-saga/effects'
import auth from './auth'
import transmit from './transmit'
import { AUTH_BIND, INFO_AUTO, INFO_CREATE, INFO_DELETE } from '../action/action';
import { setTimeout } from 'timers';
import { waitTime } from './common';

const infoSaga = function*() {
    yield takeEvery(INFO_AUTO, function*({payload}) {
        const {message, time} = payload
        const preInfo = yield select(state => state.info)
        if (!!preInfo.find(item => item === message)) {
            return
        }
        console.warn("[Info]:",message)
        yield put({type: INFO_CREATE, payload: message})
        yield waitTime(time)
        yield put({type: INFO_DELETE, payload: message})
    })
}

export default function*() {
    yield takeEvery("*", (action) => {
        // console.log("saga take", action)
    })
    // yield fork(server)
    yield fork(auth)
    yield fork(transmit)
    yield fork(infoSaga)
}