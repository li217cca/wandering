/**
 * Created by cifer on 2017/9/14.
 */

import {Redirect, withRouter, Route, Switch} from 'react-router'
import React from 'react'

export default ({to}) => {
    return <Redirect to={to}/>
}