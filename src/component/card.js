/**
 * Created by cifer on 2017/8/26.
 */
import React from 'react'
import styles from './styles.css'
import Animate from 'rc-animate';
import {GAME_HANDLE_CARD} from '../actions'

export const Card = (props) => {
    const {style={},  children, onClick=()=>{}} = props
    return (
        <div className={styles.card} style={style} onClick={onClick}>
            {children}
        </div>
    )
}
export const HoverCard = (props = {}) => {
    const {children="", style={}, onClick=()=>{}} = props
    return (
        <div style={{...style}}>
            <Card style={{position: "absolute"}} onClick={onClick}>
                {children}
            </Card>
        </div>
    )
}

export const CardList = ({cards, visible, dispatch}) => {
    const els = cards.map((card, key) => {
        const style = {width: 300}
        if (key === cards.length - 1) {style.flexShrink = 0, style.width = 240}
        return <HoverCard key={key} onClick={() => {dispatch({type: GAME_HANDLE_CARD, payload: card.id})}}
                          style={style}>{card.name}</HoverCard>
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
            <MyDiv className={styles["card-list"]} visible={visible}>
                {els}
            </MyDiv>
        </Animate>
    )
}