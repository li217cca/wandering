import React from 'react'
import { connect } from 'react-redux';
import {list as listClass, listNode} from './index.css'

export const InfoView = connect(({info}) => ({info})) (({info}) => {
    const list = info.map((item, key) => <div key={key} className={listNode}>{item}</div>)
    return (
        <div className={listClass}>
            {list}
        </div>
    )
})