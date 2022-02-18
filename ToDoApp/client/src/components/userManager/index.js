import React, { useState, useEffect } from "react";
import User from "./user";
import Toolbar from "./toolbar.js";
import Header from "./header.js";
import Footer from "./footer.js";
import './userManager.css'
import { UserContextConsumer } from '../../context/userContext'

function UserManager() {
    
  

    return (
      <UserContextConsumer>
        {context => {

          let userList = context.userList
          console.log(context.userList)
          return (
            <div className = "userManager__body">
              <div className="userManager__main">

                  <Header
                      
                      
                  />
                  <Toolbar
                      
                  />

              <div className = "userManager__content">
                
                <table className = "userManager__userList"> 
                  <tbody>
                    <tr className ="header__users">
                      <th>Id</th>
                      <th>Name</th>
                      <th>Username</th>
                      <th>Password</th>
                      <th>Age</th>
                      <th>Gender</th>
                      <th>Role</th>
                      <th>Check to Edit</th>
                    </tr>
                    </tbody>
                    <tbody>
                    {
                      
                    userList.map((user, index) => {
                      if(!user.isDeleted) {
                      // console.log(userList)
                        user._id = (undefined) ? "" : user._id
                        user.name = (undefined) ? "" : user.name
                        user.password = (undefined) ? "" : "******"
                        user.age = (undefined) ? "" : user.age
                        user.gender = (undefined) ? "" : user.gender
                        if (user.isAdmin){
                          user.isAdmin = "Admin"
                        }else {
                          user.isAdmin = "User"
                        }
                        return(
                          
                              <User 
                                key = {index}
                                _id = {user._id}
                                name={user.name}
                                username={user.username}
                                password={user.password}
                                  age={user.age}
                                  gender={user.gender}
                                  role={user.isAdmin}
                                  isDeleted = {user.isDeleted}
                              />
                          )}})}
                      </tbody>
                </table>
              </div>


                  <Footer

                  />


              </div>
            </div>
          )
        }}
      </UserContextConsumer>
    )
}

export default UserManager;