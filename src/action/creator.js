import * as action from './action'

export const login = ({username, password}) => {
    return {
        type: action.AUTH_LOGIN, 
        payload: {username, password}
    }
}

export const signin = ({username, password, password2, name}) => {
    return {
        type: action.AUTH_SIGNIN, 
        payload: {username, password, password2, name}
    }
}