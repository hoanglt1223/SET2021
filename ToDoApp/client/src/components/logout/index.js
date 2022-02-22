import React from 'react'
import {MyselfContextConsumer} from '../../context/myselfContext'
import {Link} from 'react-router-dom'

function LogOut(){
    return (
        <MyselfContextConsumer>
            {context => {
                return (
                    <div></div>
                )
            }}
        </MyselfContextConsumer>
    )
}