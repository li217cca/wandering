/**
 * Created by cifer on 2017/8/23.
 */
import React from 'react'
import styles from './styles.css'

export const Input = ({style={}, onChange=()=>{}, type="text", placeholder="", className}) => {

    return (
        <input placeholder={placeholder}
                className={className + " " + styles.input} style={style}type={type} onChange={event => {
            onChange(event.target.value)
        }}/>
    )
}
    