/**
 * Created by cifer on 2017/8/26.
 */
import React from 'react'

export default ({time}) => {
    return (
        <div>
            <div>Year {time.year} - {time.weather} - Day {time.day}</div>
        </div>
    )
}