import React, { useState, useEffect } from "react";
import Button from "./button/button";
import './user.css'


function User(props) {
    const {
        name = "",
        username = "",
        password = "",
        age = 10,
        gender = "male",
        role = "user",
        isDeleted = false
    } = props
    
    const [isEditting, setEditting] = useState('yellow');
    const [isSoftDeleted, setSoftDeleted] = useState('');
    const [isRemoved, setRemove] = useState(isDeleted);
    const [userList, setUserList] = useState([]);

    function handleRemove(){
        setRemove(true);
    }

    function createRadioId(username){
      username = username + "__radio"
      return username
    }


    return (
      <React.Fragment>
        <tr
          id = {username}
          style = {{display: setSoftDeleted('none')}}
        >
  
          <td class = "name">
            {name}
          </td>
          <td class = "username">
            {username}
          </td>
          <td class = "password">
            {password}
          </td>
          <td class = "age">
            {age}
          </td>
          <td class = "gender">
            {gender}
          </td>
          <td class = "role">
            {role}
          </td>
          <td class = "checkbox">
            <Button
              type= "checkbox"
              defaultValue= "Check"
              style={{ color: black }}
              onClick={setEditting(true)}
              id = {createRadioId(username)} 
            />
          </td>
          
        </tr>

        </React.Fragment>
    )
}


export default Project
