/**
 * Created by cifer on 2017/8/20.
 */
import {connect} from 'react-redux'
import Interface from './interface'
import Screen from './screen'
import React from 'react'

class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            pos: {x: 0, y: 0, px: 1, py: 0}
        }
    }
    render() {
        const {state, dispatch} = this.props

        return (
            <Interface>
                <Screen pos={this.state.pos}/>
            </Interface>
        )
    }
}



export default connect((state) => {
    return {
        state
    }
}, (dispatch) => {
    return {dispatch}
})(App)