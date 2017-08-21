/**
 * Created by cifer on 2017/8/21.
 */
import React from 'react'
import Shortcut from './shortcut'

class Interface extends React.Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const {children} = this.props
        // console.log("props",this.props)
        //
        // dispatch({type: "123", payload: 1})
        return (
            <div style={{position: "absolute", left: 0, right: 0, top: 0, bottom: 0}}>
                {children}
                <div style={{position: 'absolute', bottom: 12, width: "100%",
                    // backgroundColor: "#67ffef",
                    opacity: 0.5,
                    textAlign: "center"}}>
                    <Shortcut/>
                </div>
            </div>
        )
    }
}

export default Interface