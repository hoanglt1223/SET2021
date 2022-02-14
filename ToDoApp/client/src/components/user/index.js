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
  //   const {
  //     projectFetched,
  // } = props
  // const [projectList, setProjectList] = useState(projectFetched);

    function handleRemove(){
        setRemove(true);
    }

    function createRadioId(username){
      return username + "__radio"
      
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
              defaultValue= "Check to edit"
              onClick={setEditting}
          
            />
          </td>
          
        </tr>

        </React.Fragment>
    )
}


export default User
