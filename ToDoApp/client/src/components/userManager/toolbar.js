import React, { useState, useEffect } from "react";
import Button from "../user/button/button";

function Toolbar(props) {
    const {
        
    } = props

    const [project, setProject] = useState('')

    function handleCreateNewAccount() {
      window.location.href = "/signup/signup.html";
    }

    function handleDeleteAccount() {
        
    }

    function handleEditAccount() {
        
    }


    return (
      <React.Fragment>
        {/* //===== create, delete account */}
        <div id="toolbar__left"> 
          <Button
                titleValue="Create"
                id="create__button"
                handleOnClick={handleCreateNewAccount}
          />

          <Button
                titleValue="Delete"
                id="delete__button"
                handleOnClick={handleDeleteAccount}
          />
        </div>

            {/* =======title*/}
        <div id="toolbar__middle">
          <span id ="toolbar__title"></span>
        </div>

              {/* //=======edit account */}
        <div id="toolbar__right">
          <Button
                  titleValue="Edit"
                  id="edit__button"
                  handleOnClick={handleEditAccount}
          />
        </div>  
      </React.Fragment>
    )
    
}

export default Toolbar