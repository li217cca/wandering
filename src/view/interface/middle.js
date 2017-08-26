/**
 * Created by cifer on 2017/8/26.
 */
import React from 'react'
import {connect} from 'react-redux'
import Card from '../../component/card'
import styles from './styles.css'

const MyCard = (props) => {
    const {children="", style={}, onClick=() => {}} = props
    return (
        <div style={{...style}}>
            <Card onClick={onClick} style={{position: "absolute"}}>
                {children}
            </Card>
        </div>
    )
}

export default connect(({game}) => {
    return {game}
})(({game}) => {
    console.log(game.scene)
    const cards = game.scene.cards.map((_, key) => {
        const style = {width: 300}
        if (key === arr.length - 1) {
            style.flexShrink = 0
            style.width = 240
        }
        return <MyCard onClick={() => {
            console.log("card" + key, "click..")
        }}
            key={key} style={style}>{"card"+key}</MyCard>
    })
    return (
        <div style={{height: 320, maxWidth: "100%", display: "flex"}} className={styles.cardList}>
            {cards}
        </div>
    )
})