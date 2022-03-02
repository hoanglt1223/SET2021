import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { getMethod } from './api'
import { MyselfContextConsumer, MyselfContextProvider } from './context/myselfContext'
import RoutersApp from './pages'
import RouteLogIn from './pages/login'
import routes from './routes'

export default function App() {
  return (
    <Router>
      <MyselfContextProvider>
        <MyselfContextConsumer>
          {context => {
            if (window.sessionStorage.getItem('token') || window.localStorage.getItem('token')) {
              const token = window.sessionStorage.getItem('token') ? window.sessionStorage.getItem('token') : window.localStorage.getItem('token');
              if (!context.account) {
                const config = {
                  headers: {
                    authorization: token
                  }
                };
                getMethod('authentication', config).then(response => {
                  if (response.data.status === 'success') {
                    context.setAccount(response.data.account)
                  }
                  else {
                    window.sessionStorage.removeItem('token');
                    window.localStorage.removeItem('token');
                    context.setAccount(undefined)
                  }
                })
              }

              return (
                <RoutersApp />
              )
            }
            else {
              if (window.location.pathname !== routes.login.value) {
                window.location.href = routes.login.value
              }
              return (
                <RouteLogIn />
              )
            }
          }}
        </MyselfContextConsumer>
      </MyselfContextProvider>
    </Router>
  )
}

