/**
 * Created by cifer on 2017/8/23.
 */
// api event version 1.x
// connection api
export const CONN_SUCCESS = "CONN_SUCCESS"  // no server
export const CONN_DISABLE = "CONN_DISABLE"  // no server
export const CONN_TRYING = "CONN_TRYING"    // no server

// auth api
export const AUTH_DISABLE = "AUTH_DISABLE"  // no server
export const AUTH_SWITCH = "AUTH_SWITCH"    // no server
export const AUTH_SUCCESS = "AUTH_SUCCESS"
export const AUTH_SIGNUP = "AUTH_SIGNUP"
export const AUTH_LOGIN = "AUTH_LOGIN"
export const AUTH_BIND = "AUTH_BIND"
export const AUTH_ERROR = "AUTH_ERROR"
export const TOKEN_RECEIPT = "TOKEN_RECEIPT"

// game api
export const GAME_CREATE = "GAME_CREATE"
export const GAME_SELECT = "GAME_SELECT"
export const GAME_RECEIPT = "GAME_RECEIPT"  // receipt
export const GAME_RECEIPT_LIST = "GAME_RECEIPT_LIST" // receipt

// map api
export const MAP_SEARCH = "MAP_SEARCH"