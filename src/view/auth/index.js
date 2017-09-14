/**
 * Created by cifer on 2017/8/23.
 */
import React from 'react'
import {connect} from 'react-redux'
import {Input, Button, Redirect} from '../../component'
// import Input from '../../component/input'
// import Button from '../../component/button'
import * as action from '../../actions'
import styles from './styles.css'
import {Link} from 'react-router-dom'

export const Login = connect(({auth}) => ({auth}))(
    class LoginClass extends React.Component{
        constructor(props) {
            super(props)
            this.state = {
                username: "",
                password: ""
            }
        }
        render() {
            const {auth, dispatch} = this.props
            const handleChange = (key) => (value) => {
                const s = {}
                s[key] = value
                this.setState(s)
            }
            const handleLogin = () => {
                dispatch({type: action.AUTH_LOGIN, payload: this.state})
            }
            if (auth.status === action.AUTH_SUCCESS) {
                return <Redirect to="/main"/>
            }
            const p = "<div style='background-color: aquamarine'>123123</div>"
            return (
                <div style={{width: "100%", height: "100%",
                    display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <div style={{width: 260, padding: 12,
                        border: "1px solid grey", borderRadius: 4}}>
                        <div style={{color: "grey"}}>
                            登陆：{auth.resp}
                            <Link to="signin" className={styles.signin} style={{float: "right"}}>注册 >></Link>
                        </div>
                        <div style={{display: "flex", marginTop: 12}}>
                            <div>
                                <Input type="text" placeholder="用户名" onChange={handleChange("username")} style={{width: "100%"}}/>
                                <Input type="password" placeholder="密码"onChange={handleChange("password")} style={{width: "100%", marginTop: 12}}/>
                            </div>
                            <div style={{width: 60, paddingLeft: 12, flexShrink: 0}}>
                                <Button style={{height: "100%"}} onClick={handleLogin}>
                                    登陆
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
)

export const Signin = connect(({auth}) => ({auth}))(
    class SigninClass extends React.Component{
        render() {
            const {auth, dispatch} = this.props
            const handleChange = (key) => (value) => {
                const s = {}
                s[key] = value
                this.setState(s)
            }
            const handleSignin = () => {
                dispatch({type: action.AUTH_SIGNIN, payload: this.state})
            }
            if (auth.status === action.AUTH_SUCCESS) {
                return <Redirect to="/main"/>
            }
            return (
                <div style={{width: "100%", height: "100%",
                    display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <div style={{width: 260, padding: 12,
                        border: "1px solid grey", borderRadius: 4}}>
                        <div style={{color: "grey"}}>
                            注册：{auth.resp}
                            <Link to="login" className={styles.signin} style={{float: "right"}}>返回 >></Link>
                        </div>
                        <div style={{display: "flex", marginTop: 12}}>
                            <div>
                                <Input type="text" placeholder="用户名" autocomplete="off" onChange={handleChange("username")} style={{width: "100%"}}/>
                                <Input type="password" placeholder="密码" autocomplete="off" onChange={handleChange("password")} style={{width: "100%", marginTop: 12}}/>
                                <Input type="password" placeholder="请再次输入密码" autocomplete="off" onChange={handleChange("password2")} style={{width: "100%", marginTop: 12}}/>
                                <Input type="text" placeholder="昵称" autocomplete="off" onChange={handleChange("name")} style={{width: "100%", marginTop: 12}}/>
                            </div>
                            <div style={{width: 60, paddingLeft: 12, flexShrink: 0}}>
                                <Button style={{height: "100%"}} onClick={handleSignin}>
                                    登陆
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
)

// export default Auth