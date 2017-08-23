/**
 * Created by cifer on 2017/8/23.
 */
import React from 'react'
import styles from './styles.css'

export default ({style={}, onClick=()=>{}, children}) => {

    return (
        <div className={styles.button} style={style} onClick={event => {
            onClick()
        }}>
            {children}
        </div>
    )
}