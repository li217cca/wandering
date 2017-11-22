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
import { InfoView } from './interface/info/index';
import { Loading } from './interface/loading/index';
// const Background = () => <div/>
class App extends React.Component {
    render() {
        const {server, auth, history, loading} = this.props
        const authSuccess = auth.status === AUTH_SUCCESS
        const connSuccess = server.status === CONN_SUCCESS
        const Content = [
            <InfoView key="1"/>
        ]
        if (connSuccess) Content.push(
            <Switch key="2">
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
        )
        return (
            <Background>
                <Loading message={loading}>
                    {Content}
                </Loading>
            </Background>
        )
    }
}

export default withRouter(connect((state) => (state))(App))