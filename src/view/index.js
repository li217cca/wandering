/**
 * Created by cifer on 2017/8/20.
 */
import {connect} from 'react-redux'
import Interface from './interface'
import Screen from './screen'
import Auth from './auth'
import React from 'react'
import * as actions from '../actions'

class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const {state, dispatch} = this.props
        if (state.server.status !== actions.CONN_SUCCESS) return (
            <div>connecting to server...{state.server.status}</div>
        )
        if (state.auth.status !== actions.AUTH_SUCCESS) return (
            <Auth auth={state.auth} dispatch={dispatch}/>
        )
        return (
            <Interface dispatch={dispatch} state={state}>
                {/*<Screen/>*/}
            </Interface>
        )
    }
}

export default connect((state) => {
    return {
        state
    }
}, (dispatch) => {
    return {dispatch}
})(App)