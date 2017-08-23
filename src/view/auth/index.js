/**
 * Created by cifer on 2017/8/23.
 */
import React from 'react'
import Input from '../../component/input'
import Button from '../../component/button'
import action from '../../actions'

class Auth extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }
    componentDidMount() {
    }
    render() {
        const {auth, dispatch} = this.props
        const usernameOnChange = (value) => {
            this.setState({username: value})
        }
        const passwordOnChange = (value) => {
            this.setState({password: value})
        }
        const handleLogin = () => {
            dispatch({type: action.AUTH_LOGIN, payload: this.state})
        }
        const message = () => {
            switch (auth.status) {
                case action.AUTH_SUCCESS: return "登陆成功！"
                case action.AUTH_DISABLE: return "请登录："
                case action.AUTH_LOGIN: return "登陆中..."
                case action.AUTH_ERROR: return "用户名或密码错误！"
                default: return "未知错误：" + auth.status
            }
        }
        return (
            <div style={{width: "100%", height: "100%",
                display: "flex", alignItems: "center", justifyContent: "center"}}>
                <div style={{width: "240px", padding: 6,
                    border: "1px solid grey", borderRadius: 4}}>
                    <div style={{color: "grey"}}>{message()}</div>
                    <div style={{display: "flex", marginTop: 6}}>
                        <div>
                            <Input type="text" onChange={usernameOnChange} style={{width: "100%"}}/>
                            <Input type="password" onChange={passwordOnChange} style={{width: "100%", marginTop: 6}}/>
                        </div>
                        <div style={{width: 120, paddingLeft: 6}}>
                            <Button style={{height: "100%"}} onClick={handleLogin}>
                                登陆
                            </Button>
                            {/*<Input type="text" onChange={usernameOnChange} style={{width: "100%"}}/>*/}
                            {/*<Input type="password" onChange={passwordOnChange} style={{width: "100%"}}/>*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Auth