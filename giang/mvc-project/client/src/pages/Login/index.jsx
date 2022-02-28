import { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import apis from '../../apis'
import './styles.css'
import routes from '../../routes'
import { AUTHORIZATION_KEY } from '../../constants'
import UserContext from '../../context/user.context'

const LoginPage = () => {
  const navigator = useNavigate()
  const userContext = useContext(UserContext)

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  async function onSubmitLoginForm(event) {
    event.preventDefault()

    try {
      const response = await apis.auth.login(username, password)
      toast.success(`Hi, ${username} ^^`)

      handleAfterLoginSuccess(response?.token)
    } catch (error) {
      toast.error(error.message)
    }
  }

  async function handleAfterLoginSuccess(token) {
    localStorage.setItem(AUTHORIZATION_KEY, token)

    const currentUser = await apis.auth.getMe()
    userContext.saveMe(currentUser)

    navigator(routes.home.value)
  }

  return (
    <div className="container">
      <h3>Login page</h3>
      <form onSubmit={onSubmitLoginForm}>
        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" onChange={(event) => setUsername(event.target.value)} value={username} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" onChange={(event) => setPassword(event.target.value)} value={password} />
        </div>

        <a href={routes.register.value}>You don't have account?</a>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage
