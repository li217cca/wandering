/**
 * Created by cifer on 2017/8/21.
 */
import React from 'react'
import {GAME_GET_PARTY, GAME_GET_TIME} from '../../actions'
import Middle from './middle'
import Bottom from './bottom'
import Top from './Top'

class Interface extends React.Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentWillMount() {
        this.props.dispatch({type: GAME_GET_PARTY, payload: 0})
        this.props.dispatch({type: GAME_GET_TIME, payload: 0})

        // TODO 时间变换
        // this.interval = setInterval(() => {
        //     this.props.dispatch({type: GAME_GET_TIME, payload: 0})
        // }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render() {
        const {children, state} = this.props
        // console.log("props",this.props)
        //
        // dispatch({type: "123", payload: 1})
        return (
            <div style={{position: "absolute", left: 12, right: 12, top: 12, bottom: 12, display: "flex", flexDirection: "column"}}>
                {/*{children}*/}
                <div style={{width: "100%",
                    // border: "1px solid grey",
                    borderRadius: 4}}>
                    <Top time={state.game.time}/>
                </div>
                <div style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <Middle/>
                </div>
                <div style={{width: "100%", border: "1px solid grey", borderRadius: 4, height: "50%"}}>
                    <Bottom/>
                </div>
            </div>
        )
    }
}

export default Interface