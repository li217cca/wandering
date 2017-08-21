/**
 * Created by cifer on 2017/8/21.
 */
import {fork, put, takeEvery} from 'redux-saga/effects'

function* watch() {
    console.log('watch...')
}

export default function*() {
    console.log("12312312")
    yield takeEvery("*", (action) => {
        console.log("saga take", action)
    })

    yield put({type: "123123"})
    // fork(watch("", load))
}