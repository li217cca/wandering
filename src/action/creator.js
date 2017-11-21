import { GAME_SELECT, AUTH_SIGNUP, AUTH_LOGIN, GAME_CREATE, MAP_SEARCH, GAME_CHANGE_VIEW_INNER } from './action';

// auth
export const login = ({username, password}) => ({
    type: AUTH_LOGIN, 
    payload: {username, password}
})
export const signup = ({username, password, password2}) => ({
    type: AUTH_SIGNUP,
    payload: {username, password, password2}
})

// game
export const selectGame = (game_id) => ({
    type: GAME_SELECT,
    payload: game_id
})
export const createGame = (name) => ({
    type: GAME_CREATE,
    payload: name
})
export const changeView = (viewCode) => ({
    type: GAME_CHANGE_VIEW_INNER,
    payload: viewCode
})
export const ViewSelectGame = "ViewSelectGame"
export const ViewCreateGame = "ViewCreateGame"

// map
export const mapSearch = () => ({
    type: MAP_SEARCH
})
export const mapRequest = () => ({
    type: MAP_REQUEST
})
