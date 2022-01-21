import React, { useState, useEffect } from "react";


function UserManager(props) {
    // const {
        
    // } = props

    return (
      <React.Fragment>
        {/* //===== return to admin */}
        <div class = "content">
          <table id = "userList">
            <tr class ="header__users">
              <th>Name</th>
              <th>Username</th>
              <th>Password</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Role</th>
              <th>Check to Edit</th>
            </tr>
            {userList.map((user, index) => (
                    <User
                        name={user.name}
                        username={user.username}
                        password={user.password}
                        age={user.age}
                        role={user.role}
                        isDeleted = {user.isDeleted}
                    />
                ))}
          </table>
        </div>
      </React.Fragment>
    )
    
}


export default UserManager