import React, { Component } from 'react'
import { createGame, selectGame, changeView, ViewCreateGame, ViewSelectGame, newInfo } from '../../../action/creator';
import { Input } from '../../../component/input';
import { Button } from '../../../component/button';
import { connect } from 'react-redux';
import { box, listItem } from './index.css'
import { Rect as ComRect } from '../../../component/rect';
const Rect = (props) => {
    return (
        <ComRect className={listItem} {...props} style={{border: 0, ...props.style}}/>
    )
}

class CreateGame extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: ""}
    }
    render() {
        const {dispatch} = this.props
        const handleClick = () => {
            if (!this.state.name || !this.state.name instanceof String || this.state.name.length < 1) {
                dispatch(newInfo("请输入角色名称", 1500))
                return
            }
            dispatch(createGame(this.state.name))
        }
        const onChange = name => {
            this.setState({name: name})
        }
        return (
            <div>
                <Rect>+ 新建游戏 +</Rect>
                <Input className={listItem} style={{width: 400}}
                    placeholder="角色名称" onChange={onChange}/>
                <Rect style={{padding: 0}}>
                    <Button style={{width: 197, marginRight: 6}} className={listItem} onClick={() => dispatch(changeView(ViewSelectGame))}>返回</Button>
                    <Button style={{width: 197}} className={listItem} onClick={handleClick}>确定</Button>
                </Rect>
            </div>
        )
    }
}

export const SelectCreateGame = connect(
    ({game}) => ({
        list: game.list, 
        view: game.view
    })
) (({dispatch, list, view}) => {
    const Content = () => {
        if (view !== ViewSelectGame) {
            return <CreateGame dispatch={dispatch}/>
        }
        const Games = [
            <Rect key="title">+ 选择或新建游戏 +</Rect>,
            ...list.map((item, key) => {
                return (
                    <Button key={key} className={listItem}
                    onClick={() => {
                        dispatch(selectGame(item.id))
                    }}>
                        ID: {item.id} <br/>
                        Name: {item.name} <br/>
                    </Button>
                )
            }),
            <Button key="NEW" className={listItem}
                onClick={() => dispatch(changeView(ViewCreateGame))}>
                + 新建游戏 +
            </Button>
        ]
        return <div>{Games}</div>
    }
    return (
        <div className={box}>
            <Content/>
        </div>
    )
})