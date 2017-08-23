/**
 * Created by cifer on 2017/8/23.
 */
import actions from '../actions'
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

    // Auth api
    socket.On(actions.AUTH_SUCCESS, (resp) => {
        dispatch({type: actions.AUTH_SUCCESS, payload: resp})
    })
    socket.On(actions.AUTH_ERROR, (resp) => {
        dispatch({type: actions.AUTH_SUCCESS, payload: resp})
    })
    socket.On(actions.AUTH_DISABLE, (resp) => {
        dispatch({type: actions.AUTH_DISABLE, payload: resp})
    })
}