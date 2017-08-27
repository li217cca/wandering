/**
 * Created by cifer on 2017/8/20.
 */
import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import ReactDOM from 'react-dom'
import state from './reducer'
import App from './view'
import createSagaMiddleware from 'redux-saga'
import SagaManager  from './sagas'
import server from './server'
import {createBrowserHistory, createHashHistory} from 'history'
import { routerReducer, syncHistoryWithStore, push } from 'react-router-redux';
import {Router} from 'react-router'
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router'


const sagaMiddleware = createSagaMiddleware()
const history = createHashHistory()
const store = createStore(
    connectRouter(history)(state), {}, applyMiddleware(routerMiddleware(history), sagaMiddleware));

sagaMiddleware.run(SagaManager, store)

// const browserHistory = createHashHistory()
// const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
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