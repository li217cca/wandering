/**
 * Created by cifer on 2017/8/20.
 */
import {connect} from 'react-redux'
import Interface from './interface'
import {Signup, Login} from './auth'
import React from 'react'
import {AUTH_SUCCESS, CONN_SUCCESS} from '../action'
import {withRouter, Route, Switch, Redirect} from 'react-router'
import {} from 'connected-react-router'
import { Background } from './interface/background/index'
// const Background = () => <div/>

const Loading = connect((state) => (state))(({server}) => {
    return <div>connecting to server...{server.status}</div>
})
class App extends React.Component {
    render() {
        const {server, auth, history} = this.props
        const authSuccess = auth.status === AUTH_SUCCESS
        const connSuccess = server.status === CONN_SUCCESS
        return (
            <Background>
                {connSuccess ? 
                <Switch>
                    <Route path="/login" render={() => {
                        return authSuccess ? <Redirect to="main"/> : <Login/>
                    }}/>
                    <Route path="/signup" render={() => {
                        return authSuccess ? <Redirect to="main"/> : <Signup/>
                    }}/>
                    <Route path="/main" render={() => {
                        return authSuccess ? <Interface/> : <Redirect to="/login"/>
                    }}/>
                </Switch>
                : <Loading/>
                }
            </Background>
        )
    }
}

export default withRouter(connect((state) => (state))(App))