import React, { useState, useEffect } from "react";
import { SignUpContextConsumer } from "./signupContext";
import Button from "./button";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

function SignUpContent(props) {
  const [nameInput, setNameInput] = useState('');
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmPasswordInput, setConfirmPasswordInput] = useState('');
  const [ageInput, setAgeInput] = useState('')
  const [genderInput, setGenderInput] = useState('')
  const [isAdmin, setAdmin] = useState('')
  function handleSubmmit(){

  }

  function checkGender(){

  }

  function cancelInput(){
    setNameInput('')
    setUsernameInput('');
    setPasswordInput('')
    setConfirmPasswordInput('')
    setAgeInput('')
}


  return (
    <SignUpContextConsumer>

      {context => 
    
        (	
        <div id="signup">
          <h1>Sign Up</h1>
        {/* <!--Form--> */}
        <form id="signup__form">
    
          {/* <!--Name--> */}
          <div id="signup__nameField">
            Name: 
            <input
                      type='text'
                      placeholder="Enter your name."
                      id="name__field"
                      onChange={e => setNameInput(e.target.value)}
                      value={nameInput}
                      style= {{width: 300 }}
                  >
            </input>
                    <br/>
                    <span className="name__announce"></span>
          </div>
    
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
                <div id="signup__passwordField">
                    Password:
                    <input
                      type='password'
                      placeholder="Enter password..."
                      id="password__field"
                      onChange={e => setPasswordInput(e.target.value)}
                      value={confirmPasswordInput}
                    >
                    </input>
                    <br/>
                    <span className="password__announce"></span>
                </div>
    
                {/* <!--Confirm Password--> */}
                <div id="signup__confirmField">
                    Confirm Password:
                    <input
                      type='password'
                      placeholder="Confirm password"
                      id="confirm__field"
                      onChange={e => setConfirmPasswordInput(e.target.value)}
                      value={passwordInput}
                    >
                    </input>
                    <br/>
                    <span className="confirm__announce"></span>
                </div>
    
                {/* <!--Age--> */}
                <div id="signup__ageField">
                    Age:
                    <input
                      type='text'
                      placeholder="16"
                      id="age__field"
                      onChange={e => setAgeInput(e.target.value)}
                      value={ageInput}
                    >
                    </input>
                    <br/>
                    <span className="age__announce"></span>
                </div>
    
                {/* <!--Gender--> */}
                <div id="signup__genderField">
                    Gender: <div className="radio-group">
                        <input type="radio" id="  " name="gender" value="Male" checked onChange={e =>
                        {
                          console.log(e.target)
                            
                          }}
                        />
                        <label htmlFor="Male">Male</label>  
    
                        <input type="radio" id="Female" name="gender" value="Female" />
                        <label htmlFor="Female">Female</label>

                    </div>
                    <br/>
                    <span className="gender__announce"></span>
                </div>
    
                {/* // admin */}
                <div id = "signup__roleField">
                  Admin: 
                  <input 
                    type="checkbox" 
                    id="role__field"
                    onChange={e => {console.log(e.target.checked)
                      setAdmin(e.target.checked)}}
                  />
        
                </div>
            </form>
    
            <Link
              id = "return__button"
              to  = "/"
              >Return
            </Link>
    
    
            {/* <!--Button Submit--> */}
            <div  className="signup__submit">
            <Button
                          className =  "signup__submit"
                          titleValue="Sign up"
                          textColor="#333"
                          handleOnClick={() => {
                            context.setUserSignUpDataContext(usernameInput, passwordInput)
                            cancelInput()
                          }}
                        
                  
                  />
            </div>
            {/* <!--Result--> */}
            <h3 id="signup__result"></h3>
    
            
    
        </div>


      )}

    </SignUpContextConsumer>
  );
}

export default SignUpContent;
