/**
 * Created by cifer on 2017/8/23.
 */
import {CONN_SUCCESS, CONN_TRYING, CONN_DISABLE} from '../action'
import * as action from '../action'
import Ws from '../iris-ws'

const Fs = (url) => {
    const eventListener = new Set();
    const eventGet = (event, resp) => {
        eventListener.forEach(item => {
            if (item.is(event)) {
                item.callback(event, resp);
            }
        })
    }
    setTimeout(() => {
        eventGet("__ON_CONNECT__", 200)
    }, Math.random() * 1000)

    return {
        OnConnect: (callback) => {
            eventListener.add({
                is: event => event == "__ON_CONNECT__",
                callback: () => callback()
            })
        },
        OnDisconnect: (callback) => {
            eventListener.add({
                is: event => event == "__ON_DISCONNECT__",
                callback: () => callback()
            })
        },
        On: (is, callback) => {
            eventListener.add({
                is: is,
                callback: callback
            })
        },
        Emit: (event, payload) => {
            console.log("emit", event, payload)
            switch (event) {
                case action.AUTH_LOGIN: {
                    console.log()
                }
            }
        }
    }
}


export default (store) => {
    const {dispatch} = store

    // connection
    dispatch({type: CONN_TRYING})
    const socket = new Ws("ws://localhost:8080/echo")
    // const socket = new Fs("ws://localhost:8080/echo")
    socket.OnConnect(() => {
        dispatch({type: CONN_SUCCESS, payload: socket})
    })
    socket.OnDisconnect(() => {
        dispatch({type: CONN_DISABLE})
    })

    // 转发请求
    socket.On((event) => {
        return true
    }, (event, resp) => {
        const filter = ["AUTH_SUCCESS", "TOKEN"]
        if (filter.filter(key => event.includes(key)).length === 0) {
            console.log("receipt", event, resp)
        }
        dispatch({type: event, payload: resp})
        // setTimeout(() => {
        //     console.log("dis")
        //     dispatch({type: event, payload: resp})
        // }, 1000)
    })
}