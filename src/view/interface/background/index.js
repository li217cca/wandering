
import React from 'react'
import { connect } from 'react-redux';
import {background} from './index.css'

export const Background = connect(({

}) => ({
    
})) (class BackgroundClass extends React.Component {
    render() {
        const {children} = this.props
        return (
            <div className={background}>
                {children}
            </div>
        )
    }
})