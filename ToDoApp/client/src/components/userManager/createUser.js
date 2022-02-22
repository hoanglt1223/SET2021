import React, { useState, useEffect } from "react";
import Button from "./user/button/";
import { postMethod, getMethod } from "../../api";
import "./createUser.css"
function CreateUser(props) {
  const {
    isCreating = '',
    setCreating = () => {},
    setUserListContext = () => {},
  } = props
  const [nameInput, setNameInput] = useState('');
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmPasswordInput, setConfirmPasswordInput] = useState('');
  const [ageInput, setAgeInput] = useState('')
  const [genderInput, setGenderInput] = useState('Male')
  const [isAdmin, setAdmin] = useState(false)
  const [isSuccess, setSuccess] = useState('none')
  function handlecreateUser(){
    if(nameInput && usernameInput && passwordInput && confirmPasswordInput && ageInput && genderInput){
      const createdAccount = {
        name: nameInput,
        username: usernameInput,
        password: passwordInput,
        age: ageInput,
        taskList : [],
        isAdmin: isAdmin,
        gender: genderInput,
        isDeleted: false,
        isOnline: false,
      }
      console.log(createdAccount)
      postMethod('sign-up', createdAccount).then(response => {
        if (response.data.status === 'success') {
          setSuccess('')
          setCreating('none')
        } else {
          setSuccess('block')
        }
      })
      // createdAccount._id = "Wait for server to create"
      Object.assign(createdAccount, {_id: "Waiting to be created "});
      setUserListContext(prev => [...prev, createdAccount])
    } else {
      setSuccess('block')
    }
  }

  function checkGender(){
    if(genderInput == "Male"){
      setGenderInput('Female')
    } else {
      setGenderInput('Male')
    }
  }

  function cancelInput(){
    setNameInput('')
    setUsernameInput('');
    setPasswordInput('')
    setConfirmPasswordInput('')
    setAgeInput('')
}


  return (
        (	
        <div style={{display: isCreating}} className="createUser">
          <h1>Create User</h1>
        {/* <!--Form--> */}
        <form id="createUser__form">
    
          {/* <!--Name--> */}
          <div id="createUser__nameField">
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
                <div id="createUser__usernameField">

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
                <div id="createUser__passwordField">
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
    
                {/* <!--Confirm Password--> */}
                <div id="createUser__confirmField">
                    Confirm Password:
                    <input
                      type='password'
                      placeholder="Confirm password"
                      id="confirm__field"
                      onChange={e => setConfirmPasswordInput(e.target.value)}
                      value={confirmPasswordInput}
                    >
                    </input>
                    <br/>
                    <span className="confirm__announce"></span>
                </div>
    
                {/* <!--Age--> */}
                <div id="createUser__ageField">
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
                <div id="createUser__genderField">
                    Gender: <div className="radio-group">
                     
                        <input type="radio" id="Gender" name="gender" value="Gender" defaultChecked onClick={e => 
                          checkGender()
                        }
                        />

                  <label htmlFor="Gender">{genderInput}</label>  

                </div>
                <br/>
                  <span className="gender__announce"></span>
                </div>
    
                {/* // admin */}
                <div id = "createUser__roleField">
                  Admin: 
                  <input 
                    type="checkbox" 
                    id="role__field"
                    onChange={e => {
                      setAdmin(e.target.checked)}}
                  />
        
                </div>
                <div className="createUser__buttons">
                  <div className="createUser__submit">
                    <Button
                      id =  "createUser__createButton"
                      titleValue="Create"
                      handleOnClick={() => {
                        handlecreateUser()
                        cancelInput()
                      }}
                  />
        
                  </div>
                  <div className="createUser__cancel">
                    <Button
                      id =  "createUser__cancelButton"
                      titleValue="Cancel"
                      handleOnClick={() => {
                        setCreating("none")
                      }}
                    />
                  </div>
                </div>
                {/* <!--Result--> */}
                <div style = {{display: isSuccess}} id="createUser__result">
                {(isSuccess == '') && (
                    <h3 style={{color: "green"}}>Successful</h3>
                  )
                }
                {(isSuccess == 'block') && (
                    <h3 style={{color: "red"}}>Fail</h3>
                )
                }
                </div>
            </form>
        </div>
  ))
}

export default CreateUser