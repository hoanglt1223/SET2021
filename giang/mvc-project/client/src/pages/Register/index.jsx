import { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import apis from '../../apis'
import './styles.css'
import routes from '../../routes'

const RegisterPage = () => {
  const navigator = useNavigate()

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()

  async function onSubmitRegisterForm(event) {
    event.preventDefault()

    try {
      if (password !== confirmPassword) {
        toast.error('Confirm password not match')
        return
      }

      await apis.auth.register(username, password)
      toast.success(`Register success`)
      handleAfterRegisterSuccess()
    } catch (error) {
      toast.error(error.message)
    }
  }

  async function handleAfterRegisterSuccess() {
    navigator(routes.login.value)
  }

  return (
    <div className="container">
      <h3>Register page</h3>
      <form onSubmit={onSubmitRegisterForm}>
        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" onChange={(event) => setUsername(event.target.value)} value={username} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" onChange={(event) => setPassword(event.target.value)} value={password} />
        </div>

        <div className="form-group">
          <label htmlFor="confirm-password">Confirm password: </label>
          <input
            type="password"
            id="confirm-password"
            onChange={(event) => setConfirmPassword(event.target.value)}
            value={confirmPassword}
          />
        </div>

        <a href={routes.login.value}>Login</a>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default RegisterPage
