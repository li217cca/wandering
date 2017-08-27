/**
 * Created by cifer on 2017/8/23.
 */
import React from 'react'
import styles from './styles.css'

export default ({style={}, onChange=()=>{}, type="text", placeholder=""}) => {

    return (
        <input placeholder={placeholder}
               className={styles.input} style={style}type={type} onChange={event => {
            onChange(event.target.value)
        }}/>
    )
}