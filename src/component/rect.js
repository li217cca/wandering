import React from 'react'
import {rect} from './styles.css'


export const Rect = ({style={}, children, className}) => {
    return (
        <div className={className + " " + rect} style={style}>
            {children}
        </div>
    )
}