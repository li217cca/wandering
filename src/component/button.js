/**
 * Created by cifer on 2017/8/23.
 */
import React from 'react'
import styles from './styles.css'


export const Button = ({style={}, onClick=()=>{}, children, className=""}) => {
    return (
        <div className={className + " "+ styles.button} style={style} onClick={event => {
            onClick()
        }}>
            {children}
        </div>
    )
}