import React, { useState, useEffect } from "react";
import Button from "./button";
import axios from "axios"
import {postMethod} from "../../../api"
function User(props) {
    const {
        key = "",
        name = "",
        username = "",
        password = "",
        age = 10,
        gender = "male",
        role = "user",
        isDeleted = false
    } = props

    const [isEditting, setEditting] = useState('');
    const [isSoftDeleted, setSoftDeleted] = useState('');
    const [edittingData, setEdittingData] = useState({
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
      setEditting(true)
      postMethod("edit-user",  edittingData)
        .then(
          response => {

          }

        )
      handleFinishEdit()
    }

    function handleFinishEdit(){
      setEditting(false)
    }




    return (
      <React.Fragment>
        <tr
          className = {username}
          style = {{display: isSoftDeleted}}
        >
          
          <td className = "name">
            {name}
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
            <input
              className = "role__editField"
              defaultValue={role}
              style={{display: isEditting}}
              onChange = {e => handleEditField(e.target.value, "role")}
            >
            </input>
          </td>
          <td className = "checkbox">
            <Button
              type= "checkbox"
              defaultValue= "Check to edit"
              handleOnClick={handleEdit}
          
            />
          </td>
          
        </tr>

        </React.Fragment>
    )
}


export default User
