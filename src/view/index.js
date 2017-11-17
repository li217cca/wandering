/**
 * Created by cifer on 2017/8/20.
 */
import {connect} from 'react-redux'
import Interface from './interface'
import {Signin, Login} from './auth'
import React from 'react'
import {AUTH_SUCCESS, CONN_SUCCESS} from '../action'
import {withRouter, Route, Switch} from 'react-router'
import Redirect from '../component/redirect'
import {} from 'connected-react-router'

const Loading = connect((state) => (state))(({server}) => {
    return <div>connecting to server...{server.status}</div>
})
class App extends React.Component {
    render() {
        const {server, auth, history} = this.props
        const authSuccess = auth.status === AUTH_SUCCESS
        const connSuccess = server.status === CONN_SUCCESS
        return (
            <div style={{height: "100%"}}>
                {connSuccess ? 
                <Switch>
                    <Route path="/login" render={() => {
                        return authSuccess ? <Redirect to="main"/> : <Login/>
                    }}/>
                    <Route path="/signin" render={() => {
                        return authSuccess ? <Redirect to="main"/> : <Signin/>
                    }}/>
                    <Route path="/main" render={() => {
                        return authSuccess ? <Interface/> : <Redirect to="/login"/>
                    }}/>
                </Switch>
                : <Loading/>
                }
            </div>
        )
    }
}

export default withRouter(connect((state) => (state))(App))