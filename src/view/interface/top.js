/**
 * Created by cifer on 2017/8/26.
 */
import React from 'react'

export default ({time}) => {
    return (
        <div>
            <div>year {time.year} - {time.weather} - {time.day} day</div>
        </div>
    )
}