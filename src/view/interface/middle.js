/**
 * Created by cifer on 2017/8/26.
 */
import React from 'react'
import {connect} from 'react-redux'
import {HoverCard} from '../../component/card'
import styles from './styles.css'
import {GAME_HANDLE_CARD} from '../../action'
import Animate from 'rc-animate';


class Middle extends React.Component {
    render() {
        const {game, dispatch} = this.props
        return (
            <div>
                middle
            </div>
        )
    }
}

export default connect(({game}) => {
    return {game}
})(Middle)