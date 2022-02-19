import React, { useState, useEffect } from "react";
// import { LogInContextConsumer } from "./loginContext";
import Button from "./button";
import { Link } from "react-router-dom"


function LogInContent(props) {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isRememberedInput, setIsRememberedInput] = useState(false);


  function cancelInput() {
    setUsernameInput('');
    setPasswordInput('')
  }

  // function handleSubmit(context){
  //   context.setUserLogInDataContext(usernameInput, passwordInput, isRememberedInput)
  //   axios.post("http://localhost:5500/sign-in", JSON.stringify(context.userData))
  //   cancelInput()
  // }


  return (
    (

      <div id="login">
        <h1>Login</h1>
        {/* <!--Form--> */}
        <form id="login__form">
          {/* <!--User Name--> */}
          <div id="login__usernameField">

            Username:
            <input
              type='text'
              placeholder="Enter username..."
              id="username__field"
              onChange={e => setUsernameInput(e.target.value)}
              value={usernameInput}
              style={{ width: 260 }}
            >
            </input>
            <br />
            <span className="username__announce"></span>
          </div>
          {/* <!--Password--> */}
          <div id="login__passwordField">

            Password:
            <input
              type='password'
              placeholder="Enter password..."
              id="password__field"
              onChange={e => setPasswordInput(e.target.value)}
              value={passwordInput}
            >
            </input>
            <br />
            <span className="password__announce"></span>
          </div>


        </form>
        {/* <!--Checkbox RememberMe--> */}
        <div className="login__remember">
          Remember me ?
          <input
            type="checkbox"
            id="remember__button"
            onChange={e => {
              console.log(e.target.checked)
              setIsRememberedInput(e.target.checked)
            }}
          />
        </div>

        <div className="login__submit">
          <div className="login__submit">
            <Button
              className="login__submit"
              titleValue="Log in"
              textColor="#333"
              handleOnClick={() => {
                handleSubmit(context)
                cancelInput()
              }}


            />
          </div>
        </div>
        <div className="signup">
          Don't have any account ?  <br />
          <Link to="/signup">
            Sign up
          </Link>

        </div>
      </div>


    ));
}

export default LogInContent;
