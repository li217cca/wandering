/**
 * Created by cifer on 2017/8/23.
 */
import * as actions from '../actions'
import Ws from '../iris-ws'


export default (store) => {
    const {dispatch} = store

    // connection
    dispatch({type: actions.CONN_TRYING})
    const socket = new Ws("ws://localhost:8080/echo")
    socket.OnConnect(() => {
        dispatch({type: actions.CONN_SUCCESS, payload: socket})
    })
    socket.OnDisconnect(() => {
        dispatch({type: actions.CONN_DISABLE})
    })

    // 转发请求
    socket.On((event) => {
        return true
    }, (event, resp) => {
        console.log("receipt", event, resp)
        dispatch({type: event, payload: resp})
        // setTimeout(() => {
        //     console.log("dis")
        //     dispatch({type: event, payload: resp})
        // }, 1000)
    })
}