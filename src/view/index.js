/**
 * Created by cifer on 2017/8/20.
 */
import {connect} from 'react-redux'
import Interface from './interface'
import {Signin} from './auth'
import React from 'react'
import * as actions from '../actions'
import {Redirect, withRouter, Route, Switch} from 'react-router'
import {} from 'connected-react-router'

const Loading = connect((state) => (state))(({server}) => {
    return <div>connecting to server...{server.status}</div>
})

class App extends React.Component {
    render() {
        const {server, auth, history} = this.props
        return (
            <Switch>
                <Route path="/login" component={Signin}/>
                <Route path="/signin" component={Signin}/>
                <Route path="/main" render={() => {
                    return auth.status !== actions.AUTH_SUCCESS ? <Redirect to="/login"/> : <Interface/>
                }}/>
                <Route path="" render={() => {
                    if (server.status === actions.CONN_SUCCESS) {
                        return <Redirect to="/main"/>
                    }
                    return <Loading/>
                }}/>
            </Switch>
        )
    }
}

export default withRouter(connect((state) => (state))(App))