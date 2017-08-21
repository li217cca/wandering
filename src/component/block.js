/**
 * Created by cifer on 2017/8/21.
 */
import React from 'react'
import styles from './block.css'

export const NullBlock = () => (
    <span className={styles.nullBlock}>
        Null
    </span>
)

export const Block = ({children}) => {
    if (!!children) return (
        <span className={styles.block}>
            {children}
        </span>
    )
    return (
        <NullBlock/>
    )
}