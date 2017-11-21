import * as action from './action'

export const login = ({username, password}) => {
    return {
        type: action.AUTH_LOGIN, 
        payload: {username, password}
    }
}

export const signup = ({username, password, password2}) => {
    return {
        type: action.AUTH_SIGNUP, 
        payload: {username, password, password2}
    }
}

export const selectGame = (id) => {
    return {
        type: action.GAME_SELECT,
        payload: id
    }
}

export const createGame = (name) => {
    return {
        type: action.GAME_CREATE,
        payload: name
    }
}