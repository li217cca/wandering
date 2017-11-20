import React from 'react'
import { createGame, selectGame } from '../../action/creator';
import {Input, Button} from '../../component'

class CreateGame extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: ""}
    }
    render() {
        const {dispatch} = this.props
        const handleClick = () => {
            console.log("CreateGame handleClick..")
            if (!this.state.name || !this.state.name instanceof String || this.state.name.length < 1) {
                console.error("CreateGame handleClick err name =", this.state.name)
                return
            }
            dispatch(createGame(this.state.name))
        }
        const onChange = name => {
            this.setState({name: name})
        }
        return (
            <div>
                CreateGame
                <Input placeholder="角色名称" onChange={onChange}/>
                <Button onClick={handleClick}>确定</Button>
            </div>
        )
    }
}

const SelectGame = ({dispatch, list}) => {
    const Games = list.map((item, key) => {
        return (
            <Button key={key} onClick={() => {
                dispatch(selectGame(item.id))
            }}>
                ID: {item.id} <br/>
                Name: {item.name} <br/>
            </Button>
        )
    })
    return (
        <div>
            SelectGame
            {Games}
        </div>
    )
}

export default ({dispatch, list}) => {
    const Content = (!list || list.length == 0) ? CreateGame : SelectGame
    return (
        <div style={{width: "100%", height: "100%", background: "lightgrey", fontSize: 24}}>
            Please select or create a game.
            <Content dispatch={dispatch} list={list}/>
        </div>
    )
}