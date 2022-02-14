import React, { useState, useEffect } from "react";
import User from "../user";
import Toolbar from "./toolbar.js";
import Header from "./header.js";
import UserList from "./userList.js";
import Footer from "./footer.js";
import './userManager.css'


function UserManager() {

    return (
        <div id="main">

            <Header
                
                
            />
            <Toolbar
                
            />

            <UserList

            />

            <Footer

            />


        </div>

    )
}

export default UserManager;