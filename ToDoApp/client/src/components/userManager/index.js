import React, { useState, useEffect } from "react";
import User from "./user";
import Toolbar from "./toolbar.js";
import Header from "./header.js";
import Footer from "./footer.js";
import './userManager.css'
import axios from "axios";
import { UserContextConsumer } from '../../context/userContext'

function UserManager() {
    
  

    return (
      <UserContextConsumer>
        {context => {
          let userList = context.userList
          console.log(context.userList)
          console.log("11312")
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
                      // console.log(userList)
                      user.name = (undefined) ? "" : user.name
                      user.age = (undefined) ? "" : user.age
                      user.gender = (undefined) ? "" : user.gender
                      console.log(user.isAdmin)
                      if (user.isAdmin){
                        user.isAdmin = "Admin"
                      }else {
                        user.isAdmin = "User"
                      }
                      return(
                        
                            <User 
                              key = {index}
                              name={user.name}
                              username={user.username}
                              password={user.password}
                                age={user.age}
                                gender={user.gender}
                                role={user.isAdmin}
                                isDeleted = {user.isDeleted}
                            />
                        )})}
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