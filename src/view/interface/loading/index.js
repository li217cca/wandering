
import React from 'react'
import {list, listNode, filter, box} from './index.css'
import { connect } from 'react-redux';

export const Loading = ({message, children}) => {
    if (!message || message.length < 1) return <div className={box}>{children}</div>
    const Content = message.map((item, key) => {
        return <div className={listNode} key={key}>{item}</div>
    })
    return (
        <div className={box}>
            <div className={list}>
                {Content}
            </div>
            <div className={filter}>
                {children}
            </div>
        </div>
    )
}