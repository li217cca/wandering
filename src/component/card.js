/**
 * Created by cifer on 2017/8/26.
 */
import React from 'react'
import styles from './styles.css'

export default (props) => {
    const {style={}, onClick=()=>{}, children} = props
    return (
        <div className={styles.card} {...props}>
        </div>
    )
}