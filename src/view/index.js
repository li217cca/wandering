/**
 * Created by cifer on 2017/8/20.
 */
import {connect} from 'react-redux'
import React from 'react'

const App = (props) => {
    const {state, dispatch} = props
    console.log("props",props)
    dispatch({type: "123", payload: 1})
    return (
        <div>
            123
        </div>
    )
}

export default connect((state) => {
    return {
        state
    }
}, (dispatch) => {
    return {dispatch}
})(App)