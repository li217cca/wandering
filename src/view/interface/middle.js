/**
 * Created by cifer on 2017/8/26.
 */
import React from 'react'
import {connect} from 'react-redux'
import Card from '../../component/card'
import styles from './styles.css'
import {GAME_HANDLE_CARD} from '../../actions'
import Animate from 'rc-animate';

const MyCard = (props = {}) => {
    const {children="", style={}, onClick=() => {}} = props
    return (
        <div style={{...style}}>
            <Card onClick={onClick} style={{position: "absolute"}}>
                {children}
            </Card>
        </div>
    )
}

class Middle extends React.Component {
    componentDidUpdate() {
        // const middle = document.getElementById("middle")
        // setTimeout(()=>{
        //     middle.style.animationPlayState = "paused"
        // }, 1000)
    }
    render() {
        const {game, dispatch} = this.props
        const cards = game.scene.cards.map((card, key) => {
            const style = {width: 300}
            if (key === game.scene.cards.length - 1) {
                style.flexShrink = 0
                style.width = 240
            }
            return <MyCard onClick={() => {dispatch({type: GAME_HANDLE_CARD, payload: card})}}
                           key={key} style={style}>{card.name}</MyCard>
        })
        const MyDiv = ({className, children, visible}) => {
            return <div className={className}>{children}</div>
        }
        return (
            <Animate
                showProp="visible"
                transitionAppear
                componentProps={{style: {width: "100%", display: "flex", justifyContent: "center"}}}
                exclusive={true}
                transitionName={styles["card-list"]}>
                <MyDiv className={styles["card-list"]} visible={game.scene.visible}>
                    {cards}
                </MyDiv>
            </Animate>
        )
    }
}

export default connect(({game}) => {
    return {game}
})(Middle)