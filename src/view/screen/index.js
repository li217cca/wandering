/**
 * Created by cifer on 2017/8/21.
 */
import React from 'react'

class Screen extends React.Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        // document.addEventListener("onKeyDown", (a, b) => {
        //     console.log(a, b)
        // })
    }
    render() {
        const {children} = this.props
        console.log("props",this.props)
        //
        // dispatch({type: "123", payload: 1})
        return (
            <div style={{height: "100%", width: "100%", backgroundColor: "#6fbb6f", textAlign: "center"}}>
                screen
            </div>
        )
    }
}

export default Screen