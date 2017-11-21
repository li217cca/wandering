
/**
 * Api event version 1.x
 * 
 * 
 */
// conn api
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
export const GAME_CHANGE_VIEW_INNER = "GAME_CHANGE_VIEW_INNER" // no server

// map api
export const MAP_SEARCH = "MAP_SEARCH"
export const MAP_REQUEST = "MAP_REQUEST" // ()
export const MAP_RECEIPT = "MAP_RECEIPT"

// quest api
// export const QUEST_HANDLE = "QUEST_HANDLE"

// bag api
export const BAG_REQUEST = "BAG_REQUEST" // (id)
export const BAG_RECEIPT = "BAG_RECEIPT"

// item api
export const ITEM_USE = "ITEM_USE" // (id)