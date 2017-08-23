/**
 * Created by cifer on 2017/8/20.
 */
import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReactDOM from 'react-dom'
import reducer from './reducer'
import App from './view'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'
import server from './server'

const sagaMiddleware = createSagaMiddleware(sagas)
const store = createStore(reducer,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(sagas, store)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)

server(store)

// window.addEventListener('keydown', (event) => {
//     store.dispatch({
//         type: "KEY_DOWN", payload: event.key
//     })
// })
// window.addEventListener('keyup', (event) => {
//     store.dispatch({
//         type: "KEY_UP", payload: event.key
//     })
// })