import React from 'react'
import { MyselfContextConsumer } from '../../context/myselfContext'
import { Link } from 'react-router-dom'
import routes from '../../routes'

function LogOut() {
    return (
        <MyselfContextConsumer>
            {context => {
                return (
                    <Link to = {routes.login.value} onClick={e => {
                        context.setAccount(undefined);
                        window.sessionStorage.clear();
                        window.localStorage.removeItem('token');
                    }}>Log Out</Link>
                )
            }}
        </MyselfContextConsumer>
    )
}

export default LogOut