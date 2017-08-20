/**
 * Created by cifer on 2017/8/20.
 */
import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ReactDOM from 'react-dom'
import reducer from './reducer'
import App from './view'

const store = createStore(reducer, {});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)