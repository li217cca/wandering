/**
 * Created by cifer on 2017/8/26.
 */
import React from 'react'
import {connect} from 'react-redux'
import Button from '../../component/button'
import styles from './styles.css'
import {GAME_HANDLE_CARD, GAME_GET_PARTY, GAME_GET_BAG} from '../../actions'
import Animate from 'rc-animate';

const CharCard = (props) => {
    return (
        <div className={styles["char-card"]}>
            {props.name}
        </div>
    )
}

const List = ({Component, items}) => {
    const content = items.map((item, key) => <Component key={key} {...item}/>)
    return (
        <div style={{border: "1px solid grey", height: "100%",
            boxSizing: "border-box", overflowX: "auto"}}>
            {content}
        </div>
    )
}

class Right extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            display: "party"
        }
    }
    render() {
        const {game, dispatch} = this.props
        const listSwitch = {
            party: <List Component={CharCard} items={game.party}/>,
            bag: "null"
        }
        return (
            <div style={{display: "flex", flexDirection: "column", height: "100%", padding: 12, boxSizing: "border-box"}}>
                <div style={{marginBottom: 12}}>行动力: (100 / 100)</div>
                <div style={{height: "10%", marginBottom: 12, flexGrow: 1}}>
                    {listSwitch[this.state.display]}
                </div>
                <div style={{marginBottom: 12, display: "flex", height: 36, flexShrink: 0}}>
                    <Button onClick={() => {dispatch({type: GAME_GET_BAG}); this.setState({display: "bag"})}}
                            style={{width: "100%", marginRight: 12}}>物品</Button>
                    <Button onClick={() => {dispatch({type: GAME_GET_PARTY}); this.setState({display: "party"})}}
                            style={{width: "100%"}}>队伍</Button>
                </div>
                <Button style={{height: 180, flexShrink: 0,
                    backgroundColor: "white"}}>Map</Button>
            </div>
        )
    }
}

export default connect(({game}) => ({game}))(Right)