/**
 * Created by cifer on 2017/8/21.
 */
import React from 'react'
import {connect} from 'react-redux'
import {GAME_GET_PARTY, GAME_GET_TIME, GAME_GET_SCENE, AUTH_SUCCESS} from '../../actions'
import Middle from './middle'
import Bottom from './bottom'
import Top from './top'
import Right from './right'
import {CardList} from '../../component/card'
import {Redirect} from 'react-router'

class Interface extends React.Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentWillMount() {
        // this.props.dispatch({type: GAME_GET_PARTY, payload: 0})
        // this.props.dispatch({type: GAME_GET_TIME, payload: 0})
        // this.props.dispatch({type: GAME_GET_SCENE, payload: 0})

        // TODO 时间变换
        // this.interval = setInterval(() => {
        //     this.props.dispatch({type: GAME_GET_TIME, payload: 0})
        // }, 1000)
    }
    componentDidMount() {
    }
    render() {
        const {children, state, dispatch, history} = this.props

        return (
            <div style={{display: "flex", width: "100%", height: "100%"}}>
                <div style={{padding: 12, width: "40%", flexGrow: 1, boxSizing: "border-box",
                    display: "flex", flexDirection: "column"}}>
                    <div style={{borderRadius: 4}}>
                        <Top time={state.game.time}/>
                    </div>
                    <div style={{marginBottom: 24, height: "100%",
                        display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <Middle/>
                    </div>
                    <div style={{display: "flex", flexShrink: 0,
                        alignItems: "center", justifyContent: "center"}}>
                        <CardList cards={state.game.scene.cards} visible={state.game.scene.visible} dispatch={dispatch}/>
                    </div>
                </div>
                <div style={{width: 204, flexShrink: 0, borderLeft: "2px solid grey"}}>
                    <Right/>
                </div>
            </div>
        )
    }
}

export default connect(({state}) => {
    return {
        state
    }
}, (dispatch) => {
    return {dispatch}
})(Interface)