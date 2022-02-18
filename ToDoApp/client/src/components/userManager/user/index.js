import React, { useState, useEffect } from "react";
import Button from "./button";
import axios from "axios"
import {postMethod, deleteMethod} from "../../../api"
function User(props) {
    const {
        _id = "",
        name = "",
        username = "",
        password = "",
        age = 10,
        gender = "male",
        role = "user",
        isDeleted = false
    } = props

    const [isEditting, setEditting] = useState('none');
    const [isSoftDeleted, setSoftDeleted] = useState('');
    const [edittingData, setEdittingData] = useState({
      id : _id,
      name: name,
      age: age,
      gender: gender,
      role: role,
    })

    useEffect(()=>{
      setSoftDeleted(isDeleted)
    }, [isDeleted])

    function handleRemove(){
        setSoftDeleted('none')
    }

    function handleEditField(text, field){
      switch(field){
        case "name": 
          setEdittingData(prevState => ({
            ...prevState,
            name: text
        }))
          break;
        case "age":
          setEdittingData(prevState => ({
            ...prevState,
            age: text
        }))
          break;
        case "gender":
          setEdittingData(prevState => ({
            ...prevState,
            gender: text
        }))
          break;
        case "role":
          setEdittingData(prevState => ({
            ...prevState,
            role: text
        }))
          break;
      }
      
    }
      
    

    function handleEdit(){
      setEditting("")
    }

    function handleFinishEdit(){
      setEditting("none")
    }


    function handleDeleteAccount(id) {
      deleteMethod('delete-user', id)
      .then(
          response => {
              
          }
      )
      handleRemove()
      handleFinishEdit()
    }

    function handleEditAccount(update) {
      postMethod('edit-user', update)
      .then(
          response => {
              
          }
      )
      handleFinishEdit()
    }



    return (
      <React.Fragment>
        <tr
          className = {username}
          style = {{display: isSoftDeleted}}
        >
          <td className = "id">
            {_id}
          </td>
          <td className = "name">
            {name}
            <br/>
            <input
              className = "name__editField"
              defaultValue={name}
              style={{display: isEditting}}
              onChange = {e => handleEditField(e.target.value, "name")}
            >
            </input>
          </td>
          <td className = "username">
            {username}
          </td>
          <td className = "password">
            {password}
          </td>
          <td className = "age">
            {age}
            <br/>
            <input
              className = "age__editField"
              defaultValue={age}
              style={{display: isEditting}}
              onChange = {e => handleEditField(e.target.value, "age")}
            >
            </input>
          </td>
          <td className = "gender">
            {gender}
            <br/>
            <input
              className = "gender__editField"
              defaultValue={gender}
              style={{display: isEditting}}
              onChange = {e => handleEditField(e.target.value, "gender")}
            >
            </input>
          </td>
          <td className = "role">
            {role}
            <br/>
            <input
              className = "role__editField"
              defaultValue={role}
              style={{display: isEditting}}
              onChange = {e => handleEditField(e.target.value, "role")}
            >
            </input>
          </td>
          <td className = "checkbox">
            {(isEditting == "none") && (
            <Button
              type= "checkbox"
              defaultValue= "Check to edit"
              handleOnClick={handleEdit}
          
            />
            )}
            {(isEditting == "") && (
                <div className="user__options">
                  <Button
                      titleValue="Delete"
                      id="delete"
                      handleOnClick={e => handleDeleteAccount(_id)}
                  />
                  <Button
                      titleValue="Edit"
                      id="edit__button"
                      handleOnClick={e => handleEditAccount(edittingData)}
                  />
                  <Button
                      titleValue="Cancel"
                      id="cancel__button"
                      handleOnClick={e => setEditting("none")}
                  />
                  
                </div>
            )}
          </td>
          
        </tr>

        </React.Fragment>
    )
}


export default User
