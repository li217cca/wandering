/**
 * Created by cifer on 2017/8/20.
 */
import { combineReducers } from 'redux'
import status from './status'
import auth from './auth'
import server from './server'

export default combineReducers({
    status,
    auth,
    server
})