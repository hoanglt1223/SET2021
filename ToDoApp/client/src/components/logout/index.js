import React from 'react'
import { MyselfContextConsumer } from '../../context/myselfContext'
import { Link } from 'react-router-dom'

export function LogOut() {
    return (
        <MyselfContextConsumer>
            {context => {
                return (
                  <Link to ='/' onClick = {e => {
                      context.setAccount(undefined);
                      window.sessionStorage.removeItem('token');
                  }}>Log Out</Link>  
                )
            }}
        </MyselfContextConsumer>
    )
}