import React, { useState, useEffect } from "react";
import { LogInContextConsumer } from "./loginContext";
import Button from "./button";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

function LoginContent(props) {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isRememberedInput, setIsRememberedInput] = useState(false);
  

  function cancelInput(){
    setUsernameInput('');
    setPasswordInput('')
}


  return (
    <LogInContextConsumer>

      {context => 
    
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
                      style= {{width: 260 }}
                  >
                  </input>
                  <br/>
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
                  <br/>
                <span className="password__announce"></span>
              </div>
              

            </form>
            {/* <!--Checkbox RememberMe--> */}
            <div className ="login__remember">
              Remember me ?
              <input 
              type="checkbox" 
              id="remember__button"
              onChange={e => {console.log(e.target.checked)
                setIsRememberedInput(e.target.checked)}}
            />
            </div>
              
            <div className="login__submit">
            <Link className="login__submit" to = "/test">
                  <Button
                          className =  "login__submit"
                          titleValue="Log in"
                          textColor="#333"
                          handleOnClick={() => {
                            context.setUserLogInDataContext(usernameInput, passwordInput, isRememberedInput)
                          
                            cancelInput()
                          }}
                        
                  
                  />
              </Link>
            </div>
            <div className = "signup">
              Don't have any account ?  <br/>
              <Link to ="/signup">
                Sign up
              </Link>
              
            </div> 
          </div>

      )}

    </LogInContextConsumer>
  );
} 

export default LoginContent;
